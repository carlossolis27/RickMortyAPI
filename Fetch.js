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


1. We define the URL of the Rick and Morty API endpoint.
2. We use the fetch function to make a GET request to the API.
3. We check if the response is OK and then parse the response as JSON.
4. Finally, we handle the data or any potential errors in the then and catch blocks.

You can replace the apiUrl with the specific endpoint you want to fetch, such as character details, episodes, locations, etc., 
based on the documentation provided by the Rick and Morty API.
