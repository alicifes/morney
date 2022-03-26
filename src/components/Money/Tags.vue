<template>
  <div class="tags">
    <div class="new">
      <button class="addtag" @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :class="{'selected':selectedTags.indexOf(tag.name)>=0}" :key="tag.id"
          @click="toggle(tag.name)">
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import tagHelper from '@/mixins/tagHelper';

@Component
export default class Tags extends mixins(tagHelper) {

  selectedTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {  //注意不能直接操作dom
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
}

</script>

<style lang="scss" scoped>
.tags {
  background: white;
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
      border-radius: 12px;
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