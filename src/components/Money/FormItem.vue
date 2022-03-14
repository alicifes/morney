<template>
  <div>
    <label class="formItem">
      <span class="name">{{fieldName}}</span>
      <input v-model="value" type="text" :placeholder="this.placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  value = '';

  @Prop({required:true}) fieldName! :string;
  @Prop() placeholder?:string;
  @Watch('value')
  onValueChaged(value:string) {
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  display: flex;
  align-items: center;

  .name {
    padding: 0 16px;
  }

  input {
    height: 40px;
    flex-grow: 1;
    border: none;
    background: transparent;
  }
}
</style>