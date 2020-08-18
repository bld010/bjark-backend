const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const express = require('express');
var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:8080'
}

const app = express();
app.use(cors());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'bjark';

app.get('/', (request, response) => {
  response.send('This is the bjark backend API');
});

app.get('/api/v1/owners', async (request, response) => {
  try {
    const owners = await database('owners').select();
    response.status(200).json(owners);
  } catch (error) {
    response.status(500).json({error})
  };
})

app.get('/api/v1/dogs', async (request, response) => {
  try {
    const dogs = await database('dogs').select();
    response.status(200).json(dogs);
  } catch (error) {
    response.status(500).json(error)
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});