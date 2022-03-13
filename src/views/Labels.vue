<template>
  <div class="background">
    <Layout>
      <div>
        <div>
          <ol class="tags">
            <li><span>衣</span>
              <icon name="right"/>
            </li>
            <li><span>食</span>
              <icon name="right"/>
            </li>
            <li><span>住</span>
              <icon name="right"/>
            </li>
            <li><span>行</span>
              <icon name="right"/>
            </li>
          </ol>
        </div>
      </div>
      <div class="createTag-wrapper">
        <button class="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "Labels",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.background{
  background: #f5f5f5;
}
.tags{
  background: white;
  font-size: 16px;
  padding-left: 16px;
  >li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 44px;
    border-bottom: 1px solid #e6e6e6;
    >.icon{
      color: #666;
      margin-right: 16px;
      width:18px;
      height: 18px;
    }
  }
}
.createTag{
  background: #767676;
  color:white;
  border-radius: 4px;
  border:none;
  padding: 9px 16px;
  &-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

</style>