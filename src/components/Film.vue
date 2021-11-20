<template>
    <li class="d-flex flex-column">
        <img :src="imgPath" alt="#">    
        {{data.title}} <br>
        {{data.original_title}} <br>
        <img :src="flags(data.original_language)" :alt="data.original_language" style="height: 30px; width: 30px;"> <br> 
       {{Math.ceil(data.vote_average / 2)}} <br>
        
        <div class="stars">
            <i class="fa fa-star s1" :class="this.avv >= 1 ? 'active' : '' "></i>
            <i class="fa fa-star s2" :class="this.avv >= 2 ? 'active' : '' "></i>
            <i class="fa fa-star s3" :class="this.avv >= 3 ? 'active' : '' "></i>
            <i class="fa fa-star s4" :class="this.avv >= 4 ? 'active' : '' "></i>
            <i class="fa fa-star s5" :class="this.avv >= 5 ? 'active' : '' "></i>
        </div>
        
    </li>
</template>

<script>


export default {
  name: 'Film',
    props: {
    data: Object,
    },
    data() {
        return {
            avv: Math.ceil(this.data.vote_average / 2),
        }
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
        },
        
        
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