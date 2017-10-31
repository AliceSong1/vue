<template>
  <div class="catalog">
    <div class="catalog-scroll"></div>
    <div class="catalog-view">
      <div  class="catalog-content">
        <div class="catalog-item" v-for="(item, index) in catalogList">{{item.name}}</div>
        <div class="active-title"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'XCatalog',
    props: {
      catalogList: {
        type: Array,
        default: function () {
          return []
        }
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
    }
  }
</script>
<style>
  .catalog {
    width: 200px;
  }
  .catalog-view {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  .catalog-content {
    position: relative;
  }
  .catalog-item {
    text-indent: 8px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #fff;
    background: #ddd;
    border-bottom: 1px solid #fff;
  }
  .active-title {
    position: absolute;
    background: #fff;
    color: #ddd;
  }
</style>
