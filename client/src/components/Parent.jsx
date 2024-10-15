import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import Body from './Body.jsx';

function ParentComponent() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('pikachu');
  const [error, setError] = useState(null); // Add this line

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Pokemon not found');
          }
          return response.json();
        })
        .then(data => {
          console.log(data); // Log the data to the console
          setData(data);
          setError(null); // Clear the error
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [searchTerm]);

  return (
    <div className="parent-component">
      <h1>Welcome to the Pokedex!</h1>
      <Search setSearchTerm={setSearchTerm} />
      {error && <div className="error">{error}</div>} {/* Add this line */}
      <Body data={data} />
    </div>
  );
}

export default ParentComponent;