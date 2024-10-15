import React from 'react';

function Body({ data }) {
  return data ? (
    <div>
      <h1>{data.name}</h1>
      {data.sprites && <img src={data.sprites.front_default} alt={data.name} />}
    </div>
  ) : null;
}

export default Body;