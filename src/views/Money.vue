<template>
  <Layout class-prefix="layout">
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">ok</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="请在这里输入文字"/>
      </label>
    </div>
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

  </Layout>
</template>

<script>
export default {
  name: "Money",
}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  @extend %clearFix;
  @extend %innerShadow;

  .output {
    padding: 9px 16px;
    font-size: 36px;
    font-family: Consolas, monospace;
    text-align: right;
  }

  .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 64px;
      border: none;
      background: transparent;

      &.ok {
        float: right;
        height: 64*2px;
      }

      &.zero {
        width: 25%*2;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(14) {
        background: darken($bg, 4*5%);
      }

      &:nth-child(12) {
        background: darken($bg, 4*6%);
      }
    }
  }
}

.types {
  background: #c4c4c4;
  display: flex;
  font-size: 24px;
  text-align: center;

  > li {
    width: 50%;
    padding: 21px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4px;
      background: #333333;
    }
  }

}

.notes {
  background: #f5f5f5;
  font-size: 14px;
  display: flex;
  align-items: center;

  .name {
    padding: 0 16px;
  }

  input {
    padding: 25px 0;
    flex-grow: 1;
    border: none;
    background: #f5f5f5;
  }
}

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