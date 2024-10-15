import React from 'react';

function Body({ data }) {
    const playCry = () => {
        if (data) {
          const audio = new Audio(data.cries.latest);
          audio.play();
        }
      };

      return data ? (
        <div>
          <h1>{data.name}</h1>
          {data.sprites && <img src={data.sprites.front_default} alt={data.name} />}
          <button onClick={playCry}>Play Cry</button>
        </div>
      ) : null;
    }

export default Body;