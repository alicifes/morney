<template>
  <div>
    <label class="formItem">
      <span class="name">{{fieldName}}</span>
      <input :value="value" type="text" :placeholder="placeholder" @input="onValueChaged($event.target.value)"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {

  @Prop({required:true}) fieldName! :string;
  @Prop() placeholder?:string;
  @Prop({default:''}) readonly value!:string;
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