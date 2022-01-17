import React from "react";

const Filter = ({ filter, onChange, clear }) => {
  return (
    <>
      <label>Find contacts by name </label>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={onChange}
        placeholder="Enter search name"
        autoComplete="off"
      />
      <button type="button" onClick={() => clear()}>Clear</button>
    </>
  );
};

export default Filter;