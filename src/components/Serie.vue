<template>
    <li class="media_card ">
        <img :src="imgPath" alt="#">  
        <div class="text p-4 border">
            <h4 class="mb-5">{{serieInfo.name}}</h4> 
            <p class="mb-3"><strong>Titolo Originale: </strong>{{serieInfo.original_name}}</p> 
            <img class="mb-3"  :src="flags(serieInfo.original_language)" :alt="serieInfo.original_language" style="height: 30px; width: 30px;">           
            <div class="stars ">
                <i class="fa fa-star s1" :class="this.avv >= 1 ? 'active' : '' "></i>
                <i class="fa fa-star s2" :class="this.avv >= 2 ? 'active' : '' "></i>
                <i class="fa fa-star s3" :class="this.avv >= 3 ? 'active' : '' "></i>
                <i class="fa fa-star s4" :class="this.avv >= 4 ? 'active' : '' "></i>
                <i class="fa fa-star s5" :class="this.avv >= 5 ? 'active' : '' "></i>
            </div>
            <p class="trama"><strong style="font-size: 25px;">Trama: </strong><br>{{serieInfo.overview}}</p>
        </div>  
    </li>
</template>

<script>


export default {
  name: 'Serie',
    props: {
    serieInfo: Array,
    },
    data() {
        return {
            avv: Math.ceil(this.serieInfo.vote_average / 2),
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
            if(!this.serieInfo.poster_path) {
                return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"
            }
            return root + size + this.serieInfo.poster_path;
        }      
    }    
    }
</script>