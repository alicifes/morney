<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types />
    <Notes/>
    <Tags/>
  </Layout>
</template>

<script>
import NumberPad from "@/components/Money/NumberPad";
import Notes from "@/components/Money/Notes";
import Tags from "@/components/Money/Tags";
import Types from "@/components/Money/Types";

export default {
  name: "Money",
  components: {Types, Tags, Notes, NumberPad},
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>