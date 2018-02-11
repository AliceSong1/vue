<template>
  <div class="catalog">
    <div class="catalog-scroll"></div>
    <div class="catalog-view">
      <!-- 锚点链接触发 -->
      <!-- <div  class="catalog-content">
        <div class="catalog-item" v-for="(item, index) in catalogList">
          <a :href="`#${item.value}`">{{item.name}}</a>
          <div class="catalog-children-item" v-for="(childItem, childIndex) in item.children">
            <a :href="`#${childItem.value}`">{{childItem.name}}</a>
          </div>
        </div>
        <div class="active-title"></div>
      </div> -->
      <!-- 点击事件触发 -->
      <div  class="catalog-content">
        <div @click.stop="toAnchor(item.value)" class="catalog-item" :class="item.value" v-for="(item, index) in catalogList">
          {{item.name}}
          <div @click.stop="toAnchor(childItem.value)" class="catalog-children-item" :class="childItem.value" v-for="(childItem, childIndex) in item.children">
            {{childItem.name}}
          </div>
        </div>
        <div class="active-title"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import debounce from 'throttle-debounce/debounce'

  export default {
    name: 'XCatalog',
    props: {
      catalogList: {
        type: Array,
        default: function () {
          return []
        }
      },
      parentContainer: {
        type: String,
        default: ''
      }
    },
    data () {
      /*
      ***
      ***
      ***
      ***
      ***
       */
      return {
        progressData: []
      }
    },
    watch: {
    },
    mounted () {
      this.recordAnchorTop()
      // window.document.querySelector('.catalog-view').addEventListener('mousewheel', debounce(300, function (event) {
      //   event.preventDefault()
      //   console.log(1)
      // }), false)

      // 获取导航菜单的展示盒子和列表盒子
      let catalogView = window.document.querySelector('.catalog-view')
      let catalogCont = window.document.querySelector('.catalog-content')
      let topDis = catalogView.clientHeight - catalogCont.clientHeight // 外框展示区与列表区高度差
      // this.leftNavMove = debounce(300, (upDown) => { // 延时函数
      // })

      // 滚轮事件
      if (topDis < 0) { // 列表区的高度大于外框展示区，导航有滚动事件
        catalogView.addEventListener('mousewheel', (event) => {
          event.preventDefault()
          // 向上滚动
          if (event.wheelDelta > 0) {
            if (catalogCont.offsetTop >= -120) {
              catalogCont.style.top = '0px'
            } else {
              catalogCont.style.top = (catalogCont.offsetTop + 120) + 'px'
            }
          } else { // 向下滚动
            if (catalogCont.offsetTop > (topDis + 120)) {
              catalogCont.style.top = (catalogCont.offsetTop - 120) + 'px'
            } else if (topDis <= 0) {
              catalogCont.style.top = topDis + 'px'
            }
          }
          // this.leftNavMove(event.wheelDelta)
        }, false)
      }

      // scroll事件
      if (this.parentContainer) {
        window.document.querySelector(this.parentContainer).addEventListener('scroll', debounce(300, () => {
          // if (this.flag === 1) {
          // }
          // let sTop = document.querySelector('.manage-main').scrollTop
          // let arrow = document.querySelector('.activeTitle')
          // if (!arrow) {
          //   return
          // }
          // for (let i = 1, len = this.progressData.length; i < len; i++) {
          //   if (this.progressData[i] > sTop) {
          //     arrow.style.top = (i - 1) * 28 + 9 + 'px'
          //     return
          //   }
          //   if (i === len - 1) {
          //     arrow.style.top = i * 28 + 9 + 'px'
          //     return
          //   }
          // }
        }))
      } else {
        // 滚动事件在window上
        window.addEventListener('scroll', debounce(300, () => {
          let sTop = document.body.scrollTop || document.documentElement.scrollTop
          let arrow = document.querySelector('.active-title')
          if (!arrow) {
            return
          }
          for (let i = 1, len = this.progressData.length; i < len; i++) {
            if (this.progressData[i] > sTop) {
              arrow.style.top = (i - 1) * 30 + 'px'
              // if ((catalogView.clientHeight - catalogCont.offsetTop) > arrow.offsetTop && arrow.offsetTop > 200) {
              //   catalogCont.style.top = catalogView.clientHeight - arrow.offsetTop - 30 + 'px'
              // } else if ((catalogCont.offsetTop + arrow.offsetTop) < 0 && arrow.offsetTop < 200) {
              //   catalogCont.style.top = -arrow.offsetTop + 'px'
              // }
              return
            }
            if (i === len - 1) {
              arrow.style.top = i * 30 + 'px'
              return
            }
          }
        }))
      }
    },
    created () {
    },
    methods: {
      recordAnchorTop () {
        this.catalogList.forEach((item, index) => {
          this.progressData.push(document.querySelector('#' + item.value).offsetTop)
          item.children.forEach((childItem, key) => {
            this.progressData.push(document.querySelector('#' + childItem.value).offsetTop)
          })
        })
      },
      toAnchor (item) {
        let anchor = document.querySelector('#' + item) // 获取当前锚点对应的页面元素
        let scrollContainer = this.parentContainer ? window.document.querySelector(this.parentContainer) : ''
        if (scrollContainer) {
          // function scrollTop () {
          //   if (comtian.scrollTop < anchor.offsetTop) {
          //     comtian.scrollTop += 1
          //   }
          //   requestAnimationFrame(scrollTop)
          // }
          // requestAnimationFrame(scrollTop)
          scrollContainer.scrollTop = anchor.offsetTop
          scrollContainer.style.transition = '0.3s'
        } else {
          document.documentElement.scrollTop = anchor.offsetTop // document.documentElement谷歌金丝雀支持&火狐
          document.body.scrollTop = anchor.offsetTop
          document.body.style.transition = '0.3s'
        }
      }
    }
  }
</script>
<style>
  a {
    text-decoration: none;
    color: #333;
  }
  .catalog {
    width: 200px;
    position: fixed;
    left: 10px;
    height: 360px;
  }
  .catalog-scroll {
    position: absolute;
    left: 1px;
    height: 100%;
    /*top: -10px;
    height: 320px;*/
    width: 0;
    border-left: 2px solid #6cb5f4;
  }
  .catalog-scroll:before {
    position: absolute;
    top: -9px;
    left: -5px;
    content: '';
    width: 5px;
    height: 5px;
    border: 2px solid #6cb5f4;
    border-radius: 50%;
  }
  .catalog-scroll:after {
    position: absolute;
    top: 360px;
    left: -5px;
    content: '';
    width: 5px;
    height: 5px;
    border: 2px solid #6cb5f4;
    border-radius: 50%;
  }
  .catalog-view {
    width: 200px;
    height: 360px;
    /*background: #ddd;*/
    box-shadow: 1px -1px 6px #6cb5f4;
    overflow: hidden;
    transition: .5s;
  }
  .catalog-content {
    position: relative;
    top: 0;
    left: 5px;
    transition: .3s;
  }
  .catalog-item {
    position: relative;
    text-indent: 25px;
    line-height: 30px;
    font-size: 16px;
    cursor: pointer;
  }
  .catalog-children-item {
    text-indent: 40px;
    line-height: 30px;
    font-size: 12px;
    cursor: pointer;
  }
  .catalog-item a {
    line-height: 30px;
    display: inline-block;
  }
  .catalog-item:after {
    position: absolute;
    content: '';
    top: 10px;
    left: -6px;
    width: 5px;
    height: 5px;
    background: #20a0ff;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  .active-title {
    position: absolute;
    top: 0;
    left: 16px;
    height: 30px;
    width: 200px;
    background: rgba(32, 160, 255, .1);
    transition: .3s;
  }
  .active-title:before {
    position: absolute;
    width: 10px;
    height: 12px;
    content: "";
    left: -22px;
    top: 8px;
    background: #20a0ff;
  }
  .active-title:after {
    position: absolute;
    width: 0;
    height: 0;
    content: "";
    left: -12px;
    top: 8px;
    border: 6px solid transparent;
    border-left-color: #20a0ff;
  }
</style>
