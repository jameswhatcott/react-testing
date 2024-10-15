import React from 'react';

function Body({ data, loading }) {
    const playCry = () => {
        if (data) {
          const audio = new Audio(data.cries.latest);
          audio.play();
        }
      };

      const capitalizedPokemonName = data ? data.name.charAt(0).toUpperCase() + data.name.slice(1) : '';

      if (loading) {
        return <div>Loading...</div>;
      }

      return data ? (
        <div>
          <h1>{capitalizedPokemonName}</h1>
          {data.sprites && <img src={data.sprites.front_default} alt={data.name} />}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="playCry" onClick={playCry}>Play Cry</button>
          </div>       
        </div>
      ) : null;
    }

export default Body;