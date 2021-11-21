<template>
  <div>
    <div class="container-fluid search_bar">
      <div class="container ">
      <div class="row d-flex search_title">
        <div class="col-6 ">
          <h1>BOOLFLIX</h1>
        </div>
        <div class="col-6 d-flex search">
            <input type="text" placeholder="Ricerca..." v-model="query" @keyup.enter="ricerca();">
            <button @click="ricerca();">Cerca</button>
        </div>
      </div>
    </div>
    </div>
    <div class="container-fluid media_container">
      <div class="container ">
      <div class="row d-flex flex-column">
        <div class="col mt-5">
          <h1>Film</h1>
          <ul class="media d-flex pt-4 pb-3">
            <Film v-for="(movie, id) in movies" :key="id" :movieInfo='movie' ></Film>
          </ul>
        </div>
        <div class="col mt-5">
          <h1>Serie</h1>
          <ul class="media d-flex pt-4 pb-3">
            <Serie v-for="(serie, id) in series" :key="id" :serieInfo='serie' ></Serie>
          </ul> 
        </div>
      </div>
      
      
    </div>
    </div>
    
  </div>
</template>

<script>
import Film from '@/components/Film.vue' 
import Serie from '@/components/Serie.vue' 
import axios from "axios"

export default {
  name: 'Main',
  components: {
    Film,
    Serie
  },
  data(){
    return{
      apiUrl: 'https://api.themoviedb.org/3',
      apiKey: '9caf6d244b3195b2f3c44cba59c630ef',
      movies: [],
      series: [],
      query: '',
    }
  },
  methods:{
    media(url, search, tipo) {
      axios.get(this.apiUrl + url, {
      params: {
        api_key: this.apiKey,
        query: search,
      }
      }).then(resp =>{
        this[tipo] = resp.data.results;
      });
    },

    ricerca(){
      this.media('/search/movie',this.query, 'movies');
      this.media('/search/tv',this.query, 'series');
      this.query = '';
    },

    flags(lang) {
    switch (lang) {
      case "en":
      return "https://flagcdn.com/256x192/gb.png"
      
      case "it":
      return "https://flagcdn.com/256x192/it.png"
      
      case "fr":
      return "https://flagcdn.com/256x192/fr.png"
      
      case "es":
      return "https://flagcdn.com/256x192/es.png"
      
      case "de":
      return "https://flagcdn.com/256x192/de.png"

      default: 
      return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"
    }
    }
  },
}
</script>

<style lang="scss">

</style>
