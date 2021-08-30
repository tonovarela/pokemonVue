import {shallowMount} from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture';


describe('Pokemon Picture componet',()=>{
    test('debe de hacer match con el snapshot',()=>{

        const wrapper=shallowMount(PokemonPicture, {props:{ pokemonId:2, showPokemon:false}});
        expect(wrapper.html()).toMatchSnapshot()

        

    })
    test('Debe de mostrar la imagen oculta y  el pokemon 101',()=>{

    })
    test('Debe de mostrar el pokemon si showPokemon:true',()=>{

    })
})