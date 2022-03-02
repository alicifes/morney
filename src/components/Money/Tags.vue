<template>
  <div class="tags">
    <div class="new">
      <button class="addtag">新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tags"
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      margin-right: 16px;
      $h: 24px;
      height: $h;
      line-height: $h;
      padding: 0 16px;
      border-radius: $h/2;
      margin-top: 4px;
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid;
      padding: 0 4px;
      color: #d9d9d9;
    }
  }
}
</style>