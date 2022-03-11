<template>
  <Layout class-prefix="layout">
    {{ recordList }}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import {Component, Watch} from 'vue-property-decorator';

const version = window.localStorage.getItem('version') || '0';
if (version === '0.0.1') {  //数据迁移
  const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  recordList.forEach(record => {
    record.createdAt = new Date(2020, 1, 1);
  });
  window.localStorage.setItem('recordList',JSON.stringify(recordList));
}
window.localStorage.setItem('version', '0.0.2');
type Record = {
  tags: string[];
  notes: string;
  type: string;  //数据类型
  amount: number;
  createdAt?: Date;
}
@Component({
  components: {
    Types, Tags, Notes, NumberPad
  }
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  record: Record = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string []) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>