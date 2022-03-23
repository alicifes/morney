<template>
  <div>
    <ul class="tabs" :class="{[classPrefix+'-tab-item']:classPrefix}">
      <li v-for="item in dataSource" :key="item.value" class="tabs-item"
          :class="liClass(item)"
          @click="select(item)">{{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string };

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass(item: DataSourceItem){
    return {
      selected: item.value === this.value, [this.classPrefix + '-tabs-item']: this.classPrefix
    };
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  font-size: 24px;
  text-align: center;

  &-item{
    width: 50%;
    padding: 21px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4px;
      background: #333333;
    }
  }
}
</style>