const request = require('request');


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    
    // parse body content and grab the first object in the array
    const parsedBody = JSON.parse(body);
  
    // if cat is not found
    if (parsedBody.length === 0) {
      callback(`Sorry, I couldn't find a cat breed '${breed}'. Perhaps you'd like a dog instead?`, null);
    } else {
      callback(null, parsedBody[0].description.trim());
    }
  });
};

module.exports = fetchBreedDescription;

// findCatDesc(breed, processFindings);