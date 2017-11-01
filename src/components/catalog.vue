<template>
  <div class="catalog">
    <div class="catalog-scroll"></div>
    <div class="catalog-view">
      <div  class="catalog-content">
        <div class="catalog-item" v-for="(item, index) in catalogList">
          <a href="javascript:;">{{item.name}}</a>
          <div class="catalog-children-item" v-for="(key, index) in item.children">
            <a href="javascript:;">{{key.name}}</a>
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
      }
    },
    watch: {

    },
    mounted () {
      window.document.querySelector('.catalog-view').addEventListener('mousewheel', debounce(300, () => {
        console.log(1)
      }), false)
      if (this.parentContainer) {
        window.document.querySelector(this.parentContainer).addEventListener('scroll', debounce(300, () => {
          console.log(1)
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
          console.log(2222)
        }))
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
  }
  .catalog-view {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  .catalog-content {
    position: relative;
    background: #ddd;
  }
  .catalog-item {
    text-indent: 8px;
    line-height: 30px;
    font-size: 16px;
  }
  .catalog-children-item {
    text-indent: 20px;
    line-height: 30px;
    font-size: 12px;
  }
  .catalog-item a {
    line-height: 30px;
    display: inline-block;
  }
  .active-title {
    position: absolute;
    background: #fff;
    color: #ddd;
  }
</style>
