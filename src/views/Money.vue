<template>
  <div>
    <Layout>
      <div class="tags">
       <ul class="current">
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
          <input type="text" placeholder="请在这里输入文字"/>
        </label>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
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
.types{
  background: #c4c4c4;
  display: flex;
  font-size: 24px;
  text-align: center;
  >li{
    width: 50%;
    padding:21px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      left:0;
      bottom:0;
      width: 100%;
      height: 4px;
      background: #333333;
    }
  }

}
.notes{
  background:#f5f5f5;
  font-size: 14px;
  display: flex;
  align-items: center;
  .name{
    padding:0 16px;
  }
  input{
    padding: 25px 0;
    flex-grow: 1;
    border: none;
    background: #f5f5f5;
  }
}
.tags{
  font-size: 14px;
  padding: 16px;
  >.current{
    display: flex;
    >li{
      background:#d9d9d9;
      margin-right: 16px;
      $h:24px;
      height: $h;
      line-height: $h;
      padding: 0 16px;
      border-radius: $h/2;
    }
  }
  > .new{
    padding-top: 16px;
      button{
      background-color: transparent;
      border: none;
      border-bottom: 1px solid;
      padding:0 4px;
      color: #d9d9d9;
    }
  }
}
</style>