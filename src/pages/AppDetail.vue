<script>
import { api, store } from "../store";
import axios from "axios";

export default {
  name: "AppDetail",
  data() {
      return {
        api,
      store,
      project:[]
    };
  },

  methods: { 
    getProject() {
      console.log("CIAO");
      axios.get(`${api.serverURI}/projects/${this.$route.params.id}`).then((res) => {
        console.log(res.data);
       this.project = res.data.results;
      });
    },},

    created() {
    this.getProject();
   },

  
};
</script>
<template>
      

<div class="container-md my-5">
  <router-link :to="{ name: 'home'}" class="btn btn-primary mb-3 " >Indietro</router-link>
  <div class="row">
<div class="col-6">
<img  :src="project.image" class="card-img-top" alt="...">
</div>

 <div class="col-6">
  <h3>Titolo</h3>
 <h1>{{ this.project.title }}</h1>
 <h3>Categoria</h3>
 <h5 class="badge d-block fs-3" :style="`background-color:` + this.project.type.color">{{ this.project.type.label }}</h5>
 <h3>Tecnologie</h3>
 <span v-for="technology in this.project.technologies" :style="`background-color:` + technology.color" class="badge mb-1 me-2 fs-6">{{ technology.label }}</span>
<h3>Descrizione</h3>
 <p class="fs-4 text-wrap text-break">{{ this.project.description }}</p>
</div>
 <div>
 </div>
</div>
</div>
</template>

<style lang="scss" scoped>

</style>
