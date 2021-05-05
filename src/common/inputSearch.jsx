import React from "react";

const InputSearch = ({ handleInputSearch, editSearchItem, searchItem }) => {
  return (
    <>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for Movies"
          aria-label="Search"
          onChange={editSearchItem}
          value={searchItem}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default InputSearch;
