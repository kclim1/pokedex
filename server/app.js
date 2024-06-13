const express = require("express");
const axios = require("axios");
const port = 3000;
const app = express()
const cors=require('cors')
// let name = 

async function fetchPokemon(){
    try{
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur/`)
        const data = pokeData.data
        // console.log(data.name)
        console.log(data.order)
        console.log(data.species.name)
        console.log(data.sprites.versions["generation-v"]["black-white"].animated.front_default);
        console.log(data.stats[3].base_stat)
    }
    catch(error){
        console.error(error)
    }
}
fetchPokemon()

app.listen(3000,()=>{
    console.log(`app running on port ${port}` )
})
