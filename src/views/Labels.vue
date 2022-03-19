<template>
  <div class="background">
    <Layout>
      <div>
        <div>
          <div class="tags">
            <router-link class="tag" :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id">
              <span>{{ tag.name }}</span>
              <icon name="right"/>
            </router-link>
          </div>
        </div>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/tagHelper.ts';


@Component({
  components: {Button},
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }

  beforeCreate() {
    this.$store.commit('fetchTags');
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

  > .tag {
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