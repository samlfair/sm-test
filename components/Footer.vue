<template>
  <prismic-rich-text class="footer" :field="footer" />
</template>

<script>
export default {
  name: "Footer",
  props: {
    footer: Array
  }
};
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .block-img {
    max-width: 200px;
  }
}
</style>
