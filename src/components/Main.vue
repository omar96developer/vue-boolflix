<template>
  <div>
    <div>
      <input type="text" placeholder="Ricerca..." v-model="query" @keyup.enter="ricerca();">
      <button @click="ricerca();">cerca</button>
      <i class="fa fa-star"></i>
    </div>
    <div class="d-flex">
      <ul>
          <Film v-for="(movie, id) in movies" :key="id" :movieInfo='movie' ></Film>
        
        <!-- <li v-for="(movie, id) in movies" :key="id" >
          <h3>film</h3>
          {{movie.title}} <br>
          {{movie.original_title}} <br>
          <img :src="flags(movie.original_language)" :alt="movie.original_language" style="height: 30px;"> <br>
          {{movie.vote_average}}
        </li>  -->
      </ul>
      <ul>
          <Serie v-for="(serie, id) in series" :key="id" :serieInfo='serie' ></Serie>

        <!-- <li v-for="(serie, id) in series" :key="id" >
          <h3>serie</h3>
          {{serie.name}} <br>
          {{serie.original_name}} <br>
          <img :src="flags(serie.original_language)" :alt="serie.original_language" style="height: 30px;"> <br>
          {{Math.ceil(serie.vote_average / 2) }}
        </li> -->
      </ul> 
    </div>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
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
  mounted() {
    
  }
}
</script>

<style lang="scss">

</style>
