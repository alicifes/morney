<template>
  <nav>
    <router-link  class="item" to="/labels" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link class="item" to="/money" active-class="selected">
      <Icon name="money"/>
      记一笔
    </router-link>
    <router-link class="item" to="/statistics" active-class="selected">
      <Icon name="statistics"/>
     统计
    </router-link>
  </nav>
</template>

<script lang="ts">
// eslint-disable-next-line no-undef
let importAll = (requireContext:__WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext)
try{
  importAll(require.context('../assets/icons',true,/\.svg$/));  //统一引入代码
}catch (error){
  console.log(error);
}
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav{
  @extend %outerShadow;
  display: flex;
  flex-direction:row;
  font-size:12px;
  > .item {
    padding: 2px 0;
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      height: 32px;
      width: 32px;
    }
  }
  > .item.selected{
    color:$color-highlight
  }
}
</style>