<template>
  <div class="tags">
    <div class="new">
      <button class="addtag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSourse" :class="{'selected':selectedTags.indexOf(tag)>=0}" :key="tag" @click="toggle(tag)">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSourse: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tag: string) {  //注意不能直接操作dom
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index,1);
    } else {
      this.selectedTags.push(tag);
    }
  }
}

</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg: #d9d9d9;
      background: $bg;
      margin-right: 16px;
      $h: 24px;
      height: $h;
      line-height: $h;
      padding: 0 16px;
      border-radius: $h/2;
      margin-top: 4px;

      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid;
      padding: 0 4px;
      color: #d9d9d9;
    }
  }
}
</style>