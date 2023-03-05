import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes,
  filterPokemonsTypes,
  filterPokemonsCreated,
  sortPokemonsAlphabetic,
  sortPokemonsAttack,
} from "../../redux/actions";

import Cards from "../Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";

function Home() {
  const dispatch = useDispatch();
  const Allpokemons = useSelector((state) => state.pokemons);
  const Alltypes = useSelector((state) => state.types);

  /*paginado */
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(15);

  const indexLastPokemons = currentPage * pokemonsPerPage; //12
  const indexFirstPokemons = indexLastPokemons - pokemonsPerPage; //0
  const currentPokemons = Allpokemons.slice(
    indexFirstPokemons,
    indexLastPokemons
  );

  const [, setOrder] = useState("");

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  /* resetea filtrado de pokemones */
  function handlerReset(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getPokemons());
  }

  /* paginado de app */
  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /* orden alfabetico */
  function handlerSortAlpha(e) {
    e.preventDefault();
    dispatch(sortPokemonsAlphabetic(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  }

  /* orden por puntos de ataque */
  function handlerSortAttack(e) {
    e.preventDefault();
    dispatch(sortPokemonsAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  }

  /* filtrado de pokemones */
  function handlerFilterTypes(e) {
    e.preventDefault();
    dispatch(filterPokemonsTypes(e.target.value));
    setCurrentPage(1);
  }

  /* filtrado de creados */
  function handlerFilterCreated(e) {
    e.preventDefault();
    dispatch(filterPokemonsCreated(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div>
      <NavBar />
      <div className="home__container">
        {/* <div className="home__item">
          <button
            className="home__reset"
            onClick={(e) => handlerReset(e)}
          >
            Reset Pokemons
          </button>
        </div> */}
        <div className="home__item">
          <div className="home__box">
            <label>Order alphabetic: </label>
            <select onChange={(e) => handlerSortAlpha(e)}>
              <option value="All">All</option>
              <option value="asc">A - Z</option>
              <option value="des">Z - A</option>
            </select>
          </div>
        </div>
        <div className="home__item">
          <div className="home__box">
            <label>Order by attack: </label>
            <select onChange={(e) => handlerSortAttack(e)}>
              <option value="All">All</option>
              <option value="asc">↑ Min - Max</option>
              <option value="des">↓ Max - Min</option>
            </select>
          </div>
        </div>
        <div className="home__item">
          <div className="home__box">
            <label>Filter by types: </label>
            <select onChange={(e) => handlerFilterTypes(e)}>
              <option value="All">All</option>
              {Alltypes?.map((type) => (
                <option value={`${type.name}`} key={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="home__item">
          <div className="home__box">
            <label>Filter by created: </label>
            <select onChange={(e) => handlerFilterCreated(e)}>
              <option value="All">All</option>
              <option value="existing">Existing</option>
              <option value="created">Created</option>
            </select>
          </div>
        </div>
      </div>
      <div className="home__item">
        <Pagination
          Allpokemons={Allpokemons.length}
          pokemonsPerPage={pokemonsPerPage}
          paginated={paginated}
        />
      </div>
      <div className="home__container">
        {currentPokemons.length ? (
          currentPokemons.map((pokemon) => {
            return (
              <div className="home__item" key={pokemon.id}>
                <NavLink
                  to={`/pokemon/${pokemon.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Cards
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types.map((t) => `${t.name}  `)}
                    attack={pokemon.attack}
                  />
                </NavLink>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      <div className="home__item">
        <Pagination
          Allpokemons={Allpokemons.length}
          pokemonsPerPage={pokemonsPerPage}
          paginated={paginated}
        />
      </div>
    </div>
  );
}

export default Home;
