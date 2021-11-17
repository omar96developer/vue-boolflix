<template>
  <div id="app">
    <div>
      <input type="text" placeholder="Ricerca..." v-model="query" @keyup.enter="film()">
      <button @click="film()">cerca</button>
      <div></div>
    </div>
    <div>
      <ul>
        <li v-for="(movie, id) in movies" :key="id">
          {{movie.title}} <br>
          {{movie.original_title}} <br>
          <img :src="flags(movie.original_language)" :alt="movie.original_language"> <br>
          {{movie.vote_average}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import axios from "axios"

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      apiUrl: 'https://api.themoviedb.org/3',
      apiKey: '9caf6d244b3195b2f3c44cba59c630ef',
      movies: undefined,
      query: '',
    }
  },
  methods:{
    film() {
      axios.get(this.apiUrl + '/search/movie', {
      params: {
        api_key: this.apiKey,
        query: this.query,
      }
      }).then(resp =>{
        this.movies = resp.data.results;
      });
      this.query = ''
      return this.movies
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
  mounted() {
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  img {
    height: 50px;
  }
 
}
</style>
