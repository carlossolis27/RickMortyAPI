async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Usage
const apiUrl = 'https://rickandmortyapi.com/api/character';
fetchData(apiUrl)
  .then(data => {
    // Process the data
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }); 

