<template>
<h1  v-if="!pokemon">Espere por favor ...</h1>
  <div v-else>    
      <h1>Quien es este pokemon?</h1>
     <pokemon-picture   :pokemonId="pokemon.id" :showPokemon="showPokemon" ></pokemon-picture>
     <pokemon-options @selection="checkAnswer" :pokemons="pokemonsArr"></pokemon-options>
     <template v-if="showAnswer">
       <h2  class=fade-in>{{message}}</h2>      
    <button  @click="newGame">Nuevo juego</button>
     </template>
    

      
  </div>
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import getPokemonOptions  from  '@/helpers/getPokemonOptions';

export default {
  components:{PokemonOptions,PokemonPicture},
  data() {
    return  {
      pokemonsArr :[],
      pokemon:null,
      showPokemon:false,
      showAnswer:false,
      message:''
    }
  },
  methods:{
    newGame(){
      this.showPokemon=false;
      this.showAnswer=false;
      this.pokemonsArr=[];
      this.pokemon=null;
      this.mixPokemonArray();

    },

    checkAnswer(selectedId){
      this.showPokemon = true;  
      this.showAnswer=true;  
      if (selectedId == this.pokemon.id){
        
        this.message=`Correcto, ${this.pokemon.name}`;
      }else{
        this.message=`Opps, era ${this.pokemon.name}`;
      }      
      
    },
    async mixPokemonArray (){
      this.message='';
      this.pokemonsArr = await getPokemonOptions();      
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonsArr[rndInt];            
    }

  },
   mounted(){
   this.mixPokemonArray();
  }


}
</script>

<style>

</style>