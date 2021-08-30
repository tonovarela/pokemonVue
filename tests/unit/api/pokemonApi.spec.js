import pokemonApi  from '@/api/pokemonApi'


describe('pokemonAPi',()=>{

    test('Axios debe de estar previamente configurado',()=>{
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
    });


});