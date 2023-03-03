import { React, useEffect, useState } from "react";
import "../Create/Create.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon } from "../../redux/actions";
import Validate from "./Validate";

function Create() {
  const dispatch = useDispatch();
  const Alltypes = useSelector((state) => state.types);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (input.types.length < 2) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    } else {
      alert("You can only choose one or two types for your new Pokemon.");
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(input));
    setInput({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="create__form">
        <Link to="/home">
          <button className="form__button--back">Return</button>
        </Link>
        <br />
        <legend className="form__title">CREATE POKEMON </legend>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleInputChange}
          className={errors.name && "border__error"}
        />
        {errors.name && <p className="danger__error">{errors.name}</p>}

        <label htmlFor="image">Image : </label>
        <input
          type="url"
          name="image"
          value={input.image}
          onChange={handleInputChange}
          className={errors.image && "border__error"}
        />
        {errors.image && <p className="danger__error">{errors.image}</p>}

        <label htmlFor="hp">Health Points : </label>
        <input
          type="number"
          name="hp"
          value={input.hp}
          onChange={handleInputChange}
          className={errors.hp && "border__error"} //aca
        />
        {errors.hp && <p className={"danger__error"}>{errors.hp}</p>}

        <label htmlFor="attack">Attack : </label>
        <input
          type="number"
          name="attack"
          value={input.attack}
          onChange={handleInputChange}
          className={errors.attack && "border__error"}
        />
        {errors.attack && <p className={"danger__error"}>{errors.attack}</p>}

        <label htmlFor="defense">Defense :</label>
        <input
          type="number"
          name="defense"
          value={input.defense}
          onChange={handleInputChange}
          className={errors.defense && "border__error"}
        />
        {errors.defense && <p className={"danger__error"}>{errors.defense}</p>}

        <label htmlFor="speed">Speed : </label>
        <input
          type="number"
          name="speed"
          value={input.speed}
          onChange={handleInputChange}
          className={errors.speed && "border__error"}
        />
        {errors.speed && <p className={"danger__error"}>{errors.speed}</p>}

        <label htmlFor="height">Height : </label>
        <input
          type="number"
          name="height"
          value={input.height}
          onChange={handleInputChange}
          className={errors.height && "border__error"}
        />
        {errors.height && <p className={"danger__error"}>{errors.height}</p>}

        <label htmlFor="weight">Weight : </label>
        <input
          type="number"
          name="weight"
          value={input.weight}
          onChange={handleInputChange}
          className={errors.weight && "border__error"}
        />
        {errors.weight && <p className={"danger__error"}>{errors.weight}</p>}
        <br />

        <label htmlFor="weight">CHOOSE ONLY TWO TYPES</label>
        <select name="types" onChange={handleSelect}>
          {Alltypes?.map((type) => {
            return (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            );
          })}
        </select>
        {input.types.map((e) => {
          return (
            <div key={e}>
              <button
                onClick={() => handleDelete(e)}
                className={"form__button--delete"}
              >
                x
              </button>
              <span> {e} </span>
            </div>
          );
        })}
        <br />
        <div>
          <button type="submit" className="form__button">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default Create;
