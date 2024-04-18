<script>
import { api, store } from "../store";
import axios from "axios";

export default {
  name: "AppShop",
  data() {
    return {
      store,
      api,
      projects: []
    };
  },


  methods: {
   
    abstract(desc) {
     return desc.length > 30 ? desc.substr(0, 30) + `...` : desc;
    }
  },
  created() {
    
  }
};
</script>
<template>

  <div class="display">
 
    <div class="card col-4 mx-3" v-for="item in store.projects" >
      
  <img  :src="item.image" class="card-img-top" alt="...">
  <div class="card-body d-flex flex-column justify-content-between">
    <div>
    <h5 class="card-title">{{ item.title }}</h5>
    <h5 class="card-title badge d-block" :style="`background-color:` + item.type.color">{{ item.type.label }}</h5>
    
    <span v-for="technology in item.technologies" :style="`background-color:` + technology.color" class="badge mb-1 me-2">{{ technology.label }}</span>
    <p class="card-text">{{ abstract(item.description) }}</p></div>
    <div>
      <router-link :to="{ name: 'project.show', params: { id: item.id } }" class="btn btn-primary mt-3" >Dettagli</router-link>
</div>
  </div>
</div>
      

    </div>
    <div class="d-flex justify-content-center">
  <nav aria-label="Page navigation" class="my-3">
  <ul class="pagination">
    <li class="page-item" v-for="link in store.pagination" :class="{active:link.active, disabled: !link.url}" @click="fetchCards(link.url)" ><a class="page-link" href="#" v-html="link.label"></a></li>
  </ul>
</nav>
</div>
</template>

<style lang="scss" scoped>
a.card-wrapper {
  display: block;
}

.display {
  padding: 60px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
  // margin: 0 var(--page-gutter);
}


// DISPLAY IMAGE

.card-img-top {
  height: 600px;
  object-fit: cover;
}



</style>
