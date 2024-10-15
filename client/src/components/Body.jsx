import React, { useEffect, useState } from 'react';

const Body = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);


    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{ color: 'blue' }}>Welcome to the Pokedex!</h1>
           {/* Pokemon title */}
            <h2>{data.name}</h2>
            {/* Pokemon image */}
            <img src={data.sprites?.front_default} alt={data.name} />
            {/* Pokemon cry */}
            <audio controls>
                <source src={data.cries?.cry} type="audio/mpeg" />


        </div>
    )
};

export default Body;