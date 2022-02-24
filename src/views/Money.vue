<template>
  <div>
    <Layout>
      <div class="tags">
       <ul class="labels">
         <li>衣</li>
         <li>食</li>
         <li>住</li>
         <li>行</li>
       </ul>
        <div class="new">
          <button class="addtag">新增标签</button>
        </div>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text"/>
        </label>
      </div>
      <div>
        <ul class="types">
          <li>支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">count</div>
        <div class="numbers">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>ok</button>
          <button>0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>

</template>

<script>
export default {
  name: "Money",
}
</script>

<style lang="scss" scoped>
.tags{
  font-size: 14px;
  >.labels{
    display: flex;
    >li{
      padding-left: 20px;
    }
  }
}
.addtag{
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  padding:0 2px;
}
</style>