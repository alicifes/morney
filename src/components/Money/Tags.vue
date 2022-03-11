<template>
  <div class="tags">
    <div class="new">
      <button class="addtag" @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :class="{'selected':selectedTags.indexOf(tag)>=0}" :key="tag" @click="toggle(tag)">
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
  @Prop(Array) readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tag: string) {  //注意不能直接操作dom
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value',this.selectedTags)
  }

  create() {
    const name = window.prompt('请输入标签');
    if (name === '') {
      window.alert('标签名不能为空');
    } else {
      if(this.dataSource){
        this.$emit('update:dataSource',[...this.dataSource, name]);
      }
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