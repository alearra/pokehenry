import React from "react";
import "./Search.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../redux/actions";

function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handlerInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    if (name === "") {
      alert("required name pokemon");
    } else {
      dispatch(getPokemonName(name));
    }
    setName("");
  }

  return (
    <form onSubmit={(e) => handlerSubmit(e)} className="search__form">
      <input
        type="text"
        className="search__input"
        placeholder="Search pokemon..."
        value={name}
        onChange={(e) => handlerInputChange(e)}
      />
      <button type="submit" className="search__reset">
        Search
      </button>
    </form>
  );
}

export default Search;
