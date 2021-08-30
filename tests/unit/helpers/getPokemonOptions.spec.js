import getPokemonOptions,{getPokemons, getPokemonNames} from '@/helpers/getPokemonOptions';

describe('getPokemonOptions helpers',()=>{


    test('Debe de regresar un arreglo de numeros',()=>{

        const pokemons = getPokemons()
        //console.log(pokemons);
        expect(pokemons.length).toBe(650);
        expect(pokemons[0]).toBe(1);
        expect(pokemons[649]).toBe(650);
    })
    test('Debe de retornar un arreglo de 4 elementos con sus nombre de pokemons',async()=>{

        const [pok1,pok2,pok3,pok4] =  await getPokemonNames([1,2,3,4]);
        expect(pok1).toStrictEqual({"id": 1, "name": 'bulbasaur' });        
    })
    test('getPokemonPptions debe de retornar un arreglo mezclado',async()=>{

        const pokemons = await getPokemonOptions()
        
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) }
          ]);

    })
})