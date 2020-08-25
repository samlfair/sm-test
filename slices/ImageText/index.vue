<template>
  <section class="section imagetext" :class="slice.primary.image_position">
    <img :src="slice.primary.image.url" :alt="slice.primary.image.alt" />
    <div>
      <prismic-rich-text :field="slice.primary.text" />
    </div>
  </section>
</template>
<script>
export default {
  props: ["slice"]
};
</script>
<style scoped>
.imagetext {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0px;
}

.imagetext.right {
  flex-direction: row-reverse;
}

.imagetext > * {
  max-width: 45%;
}
</style>
