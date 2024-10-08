// Import node-fetch
import fetch from 'node-fetch';

// Function to fetch Pokemon data
function fetchPokemonData(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    // Fetch Pokemon data
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Log the data to the console (server-side)
            console.log(data);
        })
        .catch(error => {
            // Log error to console (server-side)
            console.error("Error fetching Pokemon data:", error.message);
        });
}

// Fetch data for a specific Pokemon
fetchPokemonData('pikachu');
