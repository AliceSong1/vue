<template>
  <div class="catalog">
    <div class="catalog-scroll"></div>
    <div class="catalog-view">
      <!-- 点击事件触发 -->
      <div  class="catalog-content">
        <div @click.stop="toAnchor(item.tagClass, item.catalogClass)" class="catalog-item"
          :class="[item.catalogClass, `catalog-common${item.level}`]" v-for="(item, index) in nodeLists">
          {{item.name}}
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

    components: {
    },
    props: {
      parentSelector: { // 获取书签的父级 .manage-main 筛选器
        type: String,
        default: ''
      },
      titleSelectors: { // 级别名class 不需要加类名筛选器.
        type: Array,
        default: function () {
          return []
        }
      },
      scrollContainer: { // 确定scroll事件的触发主体 .manage-main 筛选器
        type: String,
        default: ''
      }
    },
    data () {
      /*
      ***
      ***nodeLists用于记录页面的目录名称
      ***progressData用于记录页面目录对应的offsetTop值
      ***
      ***
       */
      return {
        nodeLists: [],
        progressData: [],
        maxScrollDis: 0
      }
    },
    computed: {
    },
    watch: {

    },
    mounted () {
      let childDoms = document.querySelector(this.parentSelector).getElementsByTagName('*')
      this.getNodes(childDoms)
      this.getMaxHeight()

      // 获取导航菜单的展示盒子和列表盒子
      let catalogView = window.document.querySelector('.catalog-view')
      let catalogCont = window.document.querySelector('.catalog-content')
      let topDis = 0// 外框展示区与列表区高度差
      // 滚轮事件
      catalogView.addEventListener('mousewheel', (event) => {
        event.preventDefault()
        topDis = catalogView.clientHeight - catalogCont.clientHeight
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

      // scroll事件
      if (this.scrollContainer) {
        window.document.querySelector(this.scrollContainer).addEventListener('scroll', debounce(300, () => {
          this.handleScroll()
        }))
      } else {
        // 滚动事件在window上
        window.addEventListener('scroll', debounce(300, () => {
          this.handleScroll()
        }))
      }
    },
    created () {
    },
    methods: {
      getNodes (childDoms) {
        for (let i = 0; i < childDoms.length; i++) {
          for (let j = 0; j < this.titleSelectors.length; j++) {
            if (childDoms[i].classList.contains(this.titleSelectors[j])) {
              childDoms[i].classList.add('tag-item' + j + i)
              this.progressData.push(childDoms[i].offsetTop)
              this.nodeLists.push({
                name: childDoms[i].innerText,
                catalogClass: 'catalog-item' + j + i, // 目录增加名字
                tagClass: 'tag-item' + j + i, // 页面增加名字
                level: j + 1
              })
            }
          }
        }
      },
      getMaxHeight () {
        // 页面高度 确定滚动事件的主体
        let totalHeight = 0
        let clientHeight = 0
        let sTop = 0
        if (this.scrollContainer) { // scroll主体是其他dom元素
          let scrollContainer = window.document.querySelector(this.scrollContainer)
          totalHeight = scrollContainer.scrollHeight
          clientHeight = scrollContainer.clientHeight
          sTop = scrollContainer.scrollTop
        } else {
          totalHeight = document.body.scrollHeight || document.documentElement.scrollHeight
          clientHeight = document.body.clientHeight || document.documentElement.clientHeight
          sTop = document.body.scrollTop || document.documentElement.scrollTop
        }
        this.maxScrollDis = totalHeight - clientHeight
        return sTop
      },
      handleScroll () {
        let sTop = this.getMaxHeight()
        let arrow = document.querySelector('.active-title')
        if (this.maxScrollDis <= sTop) {
          return
        }
        if (!arrow) {
          return
        }
        for (let i = 1, len = this.progressData.length; i < len; i++) {
          if (this.progressData[i] > sTop) {
            arrow.style.top = (i - 1) * 30 + 'px'
            return
          }
          if (i === len - 1) {
            arrow.style.top = i * 30 + 'px'
            return
          }
        }
      },
      toAnchor (tagItem, catalogItem) {
        let arrow = document.querySelector('.active-title')
        let arrowTop = arrow.offsetTop
        let currentArrow = document.querySelector('.' + catalogItem)
        let currentArrowTop = currentArrow.offsetTop
        let anchor = document.querySelector('.' + tagItem) // 获取当前锚点对应的页面元素
        let anchorTop = anchor.offsetTop
        let scrollContainer = this.scrollContainer ? window.document.querySelector(this.scrollContainer) : (
          document.body.scrollTop ? document.body : document.documentElement)
        // 目录移动
        arrow.style.top = currentArrow.offsetTop + 'px'
        // 页面的移动
        if (arrowTop >= currentArrowTop) { // 向上翻滚
          this.scrollTop(scrollContainer, anchorTop)
        } else {
          this.scrollDown(scrollContainer, anchorTop)
        }
      },
      scrollTop (scrollContainer, offsetTop) {
        if (scrollContainer.scrollTop > offsetTop) {
          scrollContainer.scrollTop = scrollContainer.scrollTop - 100 > offsetTop ? scrollContainer.scrollTop - 100 : offsetTop
          window.requestAnimationFrame(() => {
            this.scrollTop(scrollContainer, offsetTop)
          })
        }
      },
      scrollDown (scrollContainer, offsetTop) {
        // 向下滚动注意是否能滑到页面低端， 否则陷入死循环
        if (scrollContainer.scrollTop < offsetTop && scrollContainer.scrollTop < this.maxScrollDis) {
          scrollContainer.scrollTop = scrollContainer.scrollTop + 100 < offsetTop ? scrollContainer.scrollTop + 100
          : offsetTop
          window.requestAnimationFrame(() => {
            this.scrollDown(scrollContainer, offsetTop)
          })
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
    top: 120px;
    right: 10px;
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
    cursor: pointer;
    line-height: 30px;
  }
  .catalog-common1 {
    text-indent: 16px;
    font-size: 16px;
  }
  .catalog-common2 {
    text-indent: 30px;
    font-size: 14px;
  }
  .catalog-common3 {
    text-indent: 44px;
    font-size: 12px;
  }
  .catalog-common4 {
    text-indent: 54px;
    font-size: 12px;
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
