<template>
  <div>
    <x-catalog
    :catalogList="catalogList"
    ></x-catalog>
  </div>
</template>
<script>
  import XCatalog from '../components/catalog'

  export default {
    components: {
      XCatalog
    },
    data () {
      return {
        catalogList: [
          {
            name: '一级目录1',
            value: '1',
            children: [
              {
                name: '二级目录',
                value: '21'
              }
            ]
          },
          {
            name: '一级目录2',
            value: '2',
            children: [
              {
                name: '二级目录',
                value: '21'
              }
            ]
          },
          {
            name: '一级目录3',
            value: '3',
            children: [
              {
                name: '二级目录',
                value: '21'
              }
            ]
          },
          {
            name: '一级目录4',
            value: '4',
            children: [
              {
                name: '二级目录',
                value: '21'
              }
            ]
          },
          {
            name: '一级目录5',
            value: '5',
            children: [
              {
                name: '二级目录',
                value: '21'
              }
            ]
          },
          {
            name: '一级目录6',
            value: '6',
            children: [
              {
                name: '二级目录',
                value: '21'
              }
            ]
          },
          {
            name: '一级目录7',
            value: '7',
            children: [
              {
                name: '二级目录',
                value: '21'
              }
            ]
          },
          {
            name: '一级目录8',
            value: '8',
            children: [
              {
                name: '二级目录',
                value: '21'
              }
            ]
          },
          {
            name: '一级目录9',
            value: '9',
            children: [
              {
                name: '二级目录',
                value: '21'
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style scoped>

</style>
