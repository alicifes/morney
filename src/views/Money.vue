<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :value.sync="record.type" :data-source="recordTypeList  " />
    <div class="notes">
      <FormItem @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"/>
    </div>
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component } from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

// const version = window.localStorage.getItem('version') || '0';
// if (version === '0.0.1') {  //数据迁移
//   //const recordList = store.fetchRecords();
//   recordList.forEach(record => {
//     record.createdAt = new Date(2020, 1, 1);
//   });
//   window.localStorage.setItem('recordList',JSON.stringify(recordList));
// }
// window.localStorage.setItem('version', '0.0.2');

@Component({
  components: {
    Tabs, Tags, FormItem, NumberPad
  },
})
export default class Money extends Vue {
  //recordList = store.recordList; //将对象的地址进行复制
  recordTypeList = recordTypeList;
  get recordList(){
    return this.$store.state.recordList//监听
  }
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  created(){
   this.$store.commit('fetchRecords')
    console.log(this.$store.state.recordList);
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord',this.record)
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