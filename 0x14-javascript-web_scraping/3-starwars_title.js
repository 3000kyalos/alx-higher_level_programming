#!/usr/bin/node

const request = require('request');
const episodeId = process.argv[2];

if (!episodeId || isNaN(episodeId)) {
  console.error('Please provide an id for the movie as the second argument');
  console.error('Usage: ./starwars-title.js <episode_number>');
  process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${episodeId}/`;

request.get(url, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error making request:', error);
    process.exit(1);
  }
  if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
    if (body && body.detail) {
      console.error(body.detail);
    }
    process.exit(1);
  }
  if (!body || !body.title) {
    console.error('Invalid response: movie title not found.');
    process.exit(1);
  }
  console.log(body.title);
});
