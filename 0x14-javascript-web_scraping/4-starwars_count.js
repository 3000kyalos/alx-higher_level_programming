#!/usr/bin/node
const request = require('request');
const WEDGE_ID = 18;
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: ./count-wedge-movies.js <API_URL>');
  console.error('Example: ./count-wedge-movies.js https://swapi-api.alx-tools.com/api/films/');
  process.exit(1);
}

request.get(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Request failed:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`HTTP ${response.statusCode}: Failed to fetch films`);
    if (body && body.detail) console.error('Detail:', body.detail);
    process.exit(1);
  }

  if (!body || !Array.isArray(body.results)) {
    console.error('Invalid API response: expected "results" array');
    process.exit(1);
  }

  let movieCount = 0;

  for (const film of body.results) {
    // Check if Wedge's character URL is in the film's characters array
    const wedgeUrl = `https://swapi-api.alx-tools.com/api/people/${WEDGE_ID}/`;
    if (film.characters.includes(wedgeUrl)) {
      movieCount++;
    }
  }
  console.log(movieCount);
});
