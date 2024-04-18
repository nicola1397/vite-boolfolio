<script>
export default {
  data() {
    return {};
  },
  props: {
    navBar: Array,
    logo: String,
    icons: Array,
  },
};
</script>
<template>
  <header>
    <div class="header-container">
      <nav class="cat-container">
        <span v-for="links in navBar"
          ><a :href="links.url" class="categories">{{ links.label }}</a></span
        >
      </nav>
      <span>
        <a href="#">
          <img :src="logo" alt="logo" class="logo" />
        </a>
      </span>
      <div class="shopicons">
        <span v-for="icon in icons"
          ><a :href="icon.url"><i :class="icon.icon"></i> </a
        ></span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
header {
  position: sticky;
  top: 0;
  height: 80px;
  background-color: #1b6fb4;
  box-shadow: 0 0 5px black;
  z-index: 2;
  width: 100%;
  padding: 0 var(--page-gutter);
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
// CATEGORIES LINKS
.cat-container {
  display: flex;

  span {
    display: block;
    height: 50px;
    text-align: center;
    line-height: 50px;
    padding: 0 20px 0 20px;
  }
}
.categories {
  color: white;
  font-weight: 600;
}

.cat-container span:hover,


// LOGO
.logo {
  display: block;
  height: 30px;
  justify-self: center;
}

</style>
