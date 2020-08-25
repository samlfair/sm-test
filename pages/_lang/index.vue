<template>
  <div class="container">
    <slice-zone
      type="page"
      :uid="'home'"
      :lang="langs[$route.params.lang]"
      :theme="theme"
    />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

const theme = {
  align: "left",
  CallToAction: {
    align: "right",
    color: "#FFF",
    color: "#111",
    wrapper: {
      style: "background: tomato"
    },
    eyebrow: {
      color: "pink"
    }
  }
};

export default {
  name: "Home",
  components: {
    SliceZone
  },
  data() {
    return {
      theme
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      const langs = await $prismic.api;
      const langkey = {};
      langs.languages.forEach(lang => {
        langkey[lang.id.split("-")[0]] = lang.id;
      });
      return { langs: langkey };
    } catch (e) {
      error({ statsCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style>
.container {
  max-width: 700px;
  margin: auto;
}
</style>
