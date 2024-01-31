const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(cors())


const url = 'https://rickandmortyapi.com/api/character/'

app.get('/', (req, res) => {
  res.json({ mensaje: 'Crocretras que guenas las crocretras'})
})

app.get('/characters', async (req, res) => {
  try {
    const response = await axios.get(url)
    const characters = response.data.results
    res.json(characters)
  } catch (error) {
    res.status(500).json({mensaje: "Error al acceder al personaje"})
  }
})

app.get('/characters/:name', async (req, res) => {
  const nombre = req.params.name
  let urlCharacter = `${url}?name=${nombre}`
  try {
    const response = await axios.get(urlCharacter)
    const character = response.data.results
    
    if(character) {
      res.json(character)
    } else {
      res.status(404).json({mensaje: "error al encontrar el personaje"})
    }

  } catch(error) {
    res.status(500).json({mensaje: "no ha podido acceder al servidor"})
  }
})


app.listen(4000, () => {
  console.log('express está escuchando en el puerto http://localhost:4000')
})