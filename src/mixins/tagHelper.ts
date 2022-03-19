import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class tagHelper extends Vue{
  createTag() {
    const name = window.prompt('请输入标签');
    if (!name) {
      return window.alert('标签名不能为空');
    }
    this.$store.commit('creatTag', name);
  }
}
