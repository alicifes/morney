<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <Icon class="rightIcon"/>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名" placeholder="请输入标签名" :value="currentTag.name" @update:value="updateTag"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem},
})
export default class EditLabel extends Vue {
  //tag= store.findTag(this.$route.params.id);
  get currentTag(){   //这里使用es6的get语法
    return this.$store.state.currentTag;
  }
  created() {
    this.$store.commit('fetchTags');
    const id = this.$route.params.id;
    this.$store.commit('setCurrentTag', id);
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  }

  updateTag(name: string) {
    if (this.currentTag) {
      this.$store.commit('updateTag',{id:this.currentTag.id,name})
      //store.updateTag(this.tag.id,name);
    }
  }

  remove() {
    if (this.currentTag) {
      this.$store.commit('removeTag',this.currentTag.id)
      //if(store.removeTag(this.tag.id)){
      //this.goBack();
      //     } else {
      //       window.alert('删除失败')
      //     }
      //   }
      // }
      // goBack(){
      //  this.$router.back();
      // }
    }
  }

  goBack(){
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  background: white;

  > .leftIcon {
    height: 24px;
    width: 24px;
  }

  > .title {

  }

  > .rightIcon {
    height: 24px;
    width: 24px;
  }
}

.form-wrapper {
  background-color: white;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>