<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>
<style lang="scss" >
#app {
	overflow: hidden;
}
* {
	margin: 0;
	padding: 0;
}
ul,li{
	list-style: none;
}
a{
	text-decoration: none;
}
//地区选择器 文字颜色
.distpicker-address-wrapper {
  font-size: 15px!important;
  color: #333!important;
  height: 100%;
  .address-header {
    border-bottom: 1px solid #eee;
    ul {
      justify-content: flex-start!important;
      li {
        padding: 10px 10px!important;
        &.active {
          color: #f23030!important;
          border-bottom: #f23030 solid 1px!important;
        }
      }
    }
  }
  .address-container {
    height: 100%;
  }
  li {
    padding: 12px 10px!important;
    border: none!important;
    &.active {
      color: #f23030!important;
    }
  }
}
</style>
