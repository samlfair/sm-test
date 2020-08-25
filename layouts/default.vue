<template>
  <div class="container">
    <Nav
      :site_title="site_title"
      :lang="lang"
      :altlangs="altLangs"
      :menu="menu"
    />
    <Nuxt />
    <Footer :footer="footer" />
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";

export default {
  name: "DefaultLayout",
  components: { Nav, Footer },
  data: function() {
    return {
      site_title: {},
      menu: {},
      footer: {},
      lang: "",
      altLangs: []
    };
  },
  watch: {
    "$route.query": "$fetch"
  },
  async fetch() {
    const langs = await this.$prismic.api;
    const langkey = {};
    langs.languages.forEach(lang => {
      langkey[lang.id.split("-")[0]] = lang.id;
    });

    const config = await this.$prismic.api.getSingle("config", {
      lang: langkey[this.$route.params.lang]
    });
    const { footer, menu, site_title } = config.data;
    this.footer = footer;
    this.menu = menu;
    this.site_title = site_title;
    this.lang = config.lang;
    this.altLangs = config.alternate_languages;
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 740px;
  margin: auto;
  padding: 20px;
}
</style>
