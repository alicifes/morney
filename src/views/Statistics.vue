<template>
  <div>
    <Layout>
      <Tabs :data-source="recordTypeList" class="type" :value.sync="type" class-prefix="type"/>
      <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components:{
    Tabs
  }
})
export default class Statistics extends Vue{
  type='+';
  intervalList= intervalList;
  recordTypeList = recordTypeList;
  interval='day';
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item{
  background: white;
  &.selected{
    background: #c4c4c4;
    &::after{
      display: none;
    }
  }
}
</style>