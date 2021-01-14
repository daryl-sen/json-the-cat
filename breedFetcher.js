const breed = process.argv[2];
const request = require('request');

request(`https://api.thdsaecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    return console.log('There was an error in the URL.');
  }
  
  // parse body content and grab the first object in the array
  const parsedBody = JSON.parse(body);

  // if cat is not found
  if (parsedBody.length === 0) {
    return console.log(`Sorry, I couldn't find a cat breed '${breed}'. Perhaps you'd like a dog instead?`);
  } else {
    console.log(parsedBody[0].description);
  }

});