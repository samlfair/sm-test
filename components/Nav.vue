<template>
  <nav>
    <strong>
      <nuxt-link :to="'/' + $route.params.lang">
        {{ $prismic.asText(site_title) }}
      </nuxt-link>
    </strong>
    <div class="dropdown">
      <div class="main">
        {{ formattedLang }}
      </div>
      <ul class="options">
        <li v-for="lang in formattedLangs">
          <nuxt-link :to="lang.link">
            {{ lang.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <ul class="menu">
      <li v-for="item in hrefs" :key="item.destination.url">
        <nuxt-link :to="item.href">
          {{ $prismic.asText(item.link) }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  name: "Nav",
  props: {
    menu: Array,
    site_title: Array,
    lang: String,
    altlangs: Array
  },
  computed: {
    hrefs: function() {
      return this.menu.map(item => {
        item.href = LinkResolver(item.destination);
        return item;
      });
    },
    formattedLang: function() {
      return this.lang.split("-")[0];
    },
    formattedLangs: function() {
      return this.altlangs.map(item => {
        return {
          label: item.lang.split("-")[0],
          link: this.$route.fullPath.replace(
            /^\/../,
            "/" + item.lang.split("-")[0]
          )
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}

nav {
  position: fixed;
  background: white;
  z-index: 20;
  display: flex;
  top: 0;
  height: 2em;
  border-bottom: 1px solid lightgrey;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  ul.menu {
    display: flex;
    flex-direction: row;
    li {
      margin-left: 20px;
      .nuxt-link-active {
        display: inline;
        box-shadow: 0px 1px black, 0px -1px inset black;
      }
    }
  }
}

div.dropdown {
  text-transform: uppercase;
  color: grey;
  font-weight: bold;
  position: relative;
  ul.options {
    display: none;
    position: absolute;
    left: -18px;
    background: white;
    a {
      padding: 0px 20px;
      &:hover {
        background: rgb(236, 236, 236);
        text-decoration: none;
        color: grey;
      }
    }
  }
  &:hover ul.options {
    display: block;
  }
}
</style>
