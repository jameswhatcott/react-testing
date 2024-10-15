import React, { useEffect, useState } from 'react';

const Body = () => {
    const [data, setData] = useState([]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/blastoise')
            .then(response => response.json())
            .then(data => {
                data.name = capitalizeFirstLetter(data.name);
                setData(data);
              });
          }, []);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);


    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{ color: 'blue' }}>Welcome to the Pokedex!</h1>
            <h2>{data.name}</h2>
            <img src={data.sprites.front_default} alt={data.name} />
        </div>
    )
};

export default Body;