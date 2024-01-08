// Define the API endpoint URL
const apiUrl = 'https://rickandmortyapi.com/api/character';

// Use the Fetch API to make a GET request to the API endpoint
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Process the data
    console.log(data);
    // You can access characters, episodes, and other information from 'data' here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
