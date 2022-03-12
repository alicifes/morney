<template>
  <div>
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
.tags{
  background: white;
  font-size: 16px;
  >li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 44px;
    border-bottom: 1px solid #dfdee1;
    margin-left: 15px;
    >.icon{
      color: #333333;
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
   margin-top: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>