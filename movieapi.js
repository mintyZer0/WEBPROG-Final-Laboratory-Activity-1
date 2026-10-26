const express = require('express');
const app = express()
app.use(express.json())
const port = 3000

let movies = [
  { id: 1, title: "Movie title sample 1" },
  { id: 2, title: " Movie title sample 2" }
]


app.get('/', (req, res) => {
  res.send('Welcome to the Movie API')
})

app.get('/movies', (req, res) => {
  res.send(movies)
})

app.get('/movies/:id', (req, res) => {
  const id = Number(req.params.id)
  const movie = movies.find(movie => movie.id === id)
  res.send(movie)
})

app.post('/movies', (req, res) => {
  const movieTitle = req.body.title
  newMovie = ({ id: movies.length + 1, title: movieTitle })
  movies.push(newMovie)
  res.status(201).send(newMovie)
})

app.put('/movies/:id', (req, res) => {
  req_id = Number(req.params.id)
  title = req.body.title
  const movie = movies.find(movie => movie.id === req_id)
  movie.title = title
  res.send(movies)
})

app.delete('/movies/:id', (req, res) => {
  req_id = Number(req.params.id)
  movieIndex = movies.findIndex(movie => movie.id === req_id)
  movies.splice(movieIndex, 1)
  res.send(movies)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})