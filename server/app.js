const express = require("express");
const axios = require("axios");
const port = 5000;
const app = express()
const cors=require('cors')
let name = 

async function fetchPokemon(){
    try{
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/${name}`)
        // const data = pokeData.data[0]
        console.log(pokeData)
    }
    catch(error){
        console.error(error)
    }
}
fetchPokemon()


// console.log('hello')