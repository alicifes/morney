<template>
  <Layout>
    <Tabs :data-source="recordTypeList" class="type" :value.sync="type" class-prefix="type"/>
    <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval"/>
    <ol>
      <li v-for="group in result" :key="group.title">
        <h3 class="tittle">{{ beautify(group.title) }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{ item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>


<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
import dayjs from 'dayjs';


@Component({
  components: {
    Tabs
  }
})
export default class Statistics extends Vue {
  type = '+';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
  interval = 'day';

  beautify(string:string){
    const day = dayjs(string);
    const now = dayjs();
    if(day.isSame(now,'day')){
     return '今天'
    }else if(day.isSame(now.subtract(1,'day'),'day')){
      return '昨天'
    }else if(day.isSame(now.subtract(2,'day'),'day')){
      return '前天'
    }else if(day.isSame(now,'year')){
      return dayjs().format('M月D日')
    }
    return dayjs().format('YYYY年M月D日')
  }

  // eslint-disable-next-line no-undef
  tagString(tags:Tag[]){
    return tags.length===0?'无':tags.join(',')
  }

  get recordList() {
    // eslint-disable-next-line no-undef
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = { title: string, items: RecordItem[] };


    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []}; //如果为空就等于一个数组
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

}
</script>

<style lang="scss" scoped>
%init {
  line-height: 24px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tittle {
  @extend %init;
}

.record {
  @extend %init;
  background: white;
}

.notes{
 margin-right: auto;
  margin-left: 16px;
  color:#999
}

::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}
</style>