<template>
  <section class="section">
    <div class="rawHtml" v-html="$prismic.asText(slice.primary.html)"></div>
  </section>
</template>
<script>
export default {
  props: ["slice"]
};
</script>

<style scoped>
.rawHtml {
  margin: 50px 0px;
}
</style>
