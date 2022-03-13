<template>
  <div>
    编辑
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class EditLabel extends Vue{

   created(){
     console.log(this.$route.params.id);
   }
}
</script>

<style scoped>

</style>