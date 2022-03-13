<template>
  <div class="background">
    <Layout>
      <div>
        <div>
          <ol class="tags">
            <li v-for="tag in tags" :key="tag"><span>{{tag}}</span>
              <icon name="right"/>
            </li>
          </ol>
        </div>
      </div>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {tagListModel} from '@/models/tagListModel';

tagListModel.fetch();//通过该方法使tagListModel内部获得自己的状态
@Component
export default class Labels extends Vue {
  tags = tagListModel.data;   //获得tag内部的全部的data
  createTag(){
    const name = window.prompt('请输入标签名');
    if(name){
       const message = tagListModel.create(name);
       if(message === 'duplicated'){
         window.alert('请输入不同的标签名称  ')
       }else if(message === 'success'){
         window.alert('添加成功')
       }
    }
  }

}
</script>

<style lang="scss" scoped>
.background {
  background: #f5f5f5;
}

.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 44px;
    border-bottom: 1px solid #e6e6e6;

    > .icon {
      color: #666;
      margin-right: 16px;
      width: 18px;
      height: 18px;
    }
  }
}

.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  padding: 9px 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

</style>