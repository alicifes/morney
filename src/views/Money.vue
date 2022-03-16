<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"/>
    </div>
    <Tags :data-source="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import {Component } from 'vue-property-decorator';

const version = window.localStorage.getItem('version') || '0';
if (version === '0.0.1') {  //数据迁移
  const recordList = window.recordList;
  recordList.forEach(record => {
    record.createdAt = new Date(2020, 1, 1);
  });
  window.localStorage.setItem('recordList',JSON.stringify(recordList));
}
window.localStorage.setItem('version', '0.0.2');

@Component({
  components: {
    Types, Tags, FormItem, NumberPad
  }
})
export default class Money extends Vue {
  recordList = window.recordList;
  tags = window.tagList;
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string []) {
    window.tagList;
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    window.creatRecord(this.record)
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0 ;
}
</style>