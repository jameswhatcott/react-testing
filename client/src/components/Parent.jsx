import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import Body from './Body.jsx';

function ParentComponent() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('pikachu');

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          console.log(data); // Log the data to the console
          setData(data);
        });
    }
  }, [searchTerm]);

  return (
    <div className="parent-component">
      <Search setSearchTerm={setSearchTerm} />
      <Body data={data} />
    </div>
  );
}

export default ParentComponent;