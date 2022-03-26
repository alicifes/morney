<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :value.sync="record.type" :data-source="recordTypeList  " />
    <div class="notes">
      <FormItem  field-name="备注" placeholder="在这里输入备注" :value.sync="record.notes"/>
    </div>
    <Tags :value.sync="record.tags"/>
    {{record}}
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
  }

  // onUpdateNotes(value: string) {
  //   this.record.notes = value;
  // }

  saveRecord() {
    if(!this.record.tags||this.record.tags.length===0){
     return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord',this.record);
    if(this.$store.state.createRecordError === null){
      window.alert('已保存');
      this.record.notes = '';
      this.record.amount=0;
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep  .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0 ;
}
</style>