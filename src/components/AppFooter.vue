<script>
export default {
  data() {
    return {};
  },
  props: {
    legal: Array,
    social: Array,
  },
};
</script>
<template>
  <div class="footer-container">
    <div>
      <h1 class="footertitle">Nicola Pio Gallo</h1>
      <ul>
        <li v-for="link in legal">
          <a :href="link.url" class="support">{{ link.label }}</a>
        </li>
      </ul>
    </div>
    <div>
      <h2 class="socialtitle">Trovami anche su</h2>
      <ul>
        <li v-for="link in social">
          <a :href="link.url"><i :class="link.label"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0;

  li {
    display: inline;
    margin-right: 10px;
  }
}

a {
  text-decoration: none;
  &:visited {
    color: white;
  }
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  padding: 20px var(--page-gutter);
}

.footertitle {
  color: white;
  font-size: 1rem;
  margin-bottom: 10px;
}

.support {
  color: white;
  margin-right: 10px;
  font-size: 0.8rem;
}

.support:hover {
  text-decoration: underline;
}

.socialtitle {
  color: white;
  font-size: 0.8rem;
  margin-bottom: 10px;
}
</style>
