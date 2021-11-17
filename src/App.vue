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
          {{movie.title}}, {{movie.original_title}}, {{movie.original_language}}, {{movie.vote_average}}
          
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
  
 
}
</style>
