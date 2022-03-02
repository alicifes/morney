<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="请在这里输入文字"/>
    </label>
  </div>
</template>

<script>
export default {
  name: "Notes"
}
</script>

<style lang="scss" scoped>
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
</style>