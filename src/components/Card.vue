<template>
    <li class="d-flex flex-column">
        <img :src="imgPath" alt="#">    
        {{data.title}} <br>
        {{data.original_title}} <br>
        <img :src="flags(data.original_language)" :alt="data.original_language" style="height: 30px; width: 30px;"> <br> 
        {{data.vote_average}}
    </li>
</template>

<script>


export default {
  name: 'Card',
  props: {
    data: Object,
  },
   methods: {
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
  computed: {
      imgPath() {
          const root = 'https://image.tmdb.org/t/p/';
          const size = 'w342';
          if(!this.data.poster_path) {
               return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"
          }
          return root + size + this.data.poster_path;
      }
  }
 
}
</script>