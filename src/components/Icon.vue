<template>
  <div>
    <svg class="item">
      <use :xlink:href="'#'+name"></use>
    </svg>
  </div>
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
  name: "Icon",
  props:['name']
}
</script>

<style scoped>
.item{
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>