import React, { useState } from 'react';

function Search({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setSearchTerm(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Search;