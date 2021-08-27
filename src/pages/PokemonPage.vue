<template>
  <div>
      <h1>Quien es este pokemon?</h1>

     <pokemon-picture  :pokemonId="98" :showPokemon="true" ></pokemon-picture>
     <pokemon-options></pokemon-options>

      
      
  </div>
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

import getPokemonOptions  from  '@/helpers/getPokemonOptions';
getPokemonOptions();

export default {
  components:{PokemonOptions,PokemonPicture}

}
</script>

<style>

</style>