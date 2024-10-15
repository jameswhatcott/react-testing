import React, { useState } from 'react';

function Search({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;