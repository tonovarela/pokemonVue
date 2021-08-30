import pokemonApi from "../api/pokemonApi";

export const getPokemons = ()=>{
    const pokemonsArr = Array.from(Array(650));
    return pokemonsArr.map( (_,index)=> index+1 )    
}

 const getPokemonOptions = async()=>{
   const mixedPokemons = getPokemons()
                         .sort( () => Math.random( ) - 0.5 );
    const pokemonNames = await getPokemonNames( mixedPokemons.splice(0,4) );                             
    return pokemonNames; 
}

export const getPokemonNames =async([a,b,c,d]) =>{
    
    const arrayPromises= [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ];
    const [poke1, poke2, poke3, poke4]  = await Promise.all(arrayPromises);
   return [
       { name : poke1.data.name, id:poke1.data.id},
       { name : poke2.data.name, id:poke2.data.id},
       { name : poke3.data.name, id:poke3.data.id},
       { name : poke4.data.name, id:poke4.data.id},
   ]
}

export default getPokemonOptions;

