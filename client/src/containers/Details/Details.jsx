import {React, useEffect} from "react";
import "./Details.css";
import backVideo from  "../../assets/media/sunmon.mp4"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId, clear } from "../../redux/actions";


function Details() {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.detail)

  const {id} = useParams()

  useEffect(()=>{
    dispatch(getPokemonId(id))
    return () => {
      dispatch(clear());
    };
  },[dispatch, id])

  return(
    <section className="details">
      <video className="details__backvideo" src={backVideo} autoPlay loop muted />
        { 
          pokemon &&
          <div className="details__container">
            <Link to="/home"><button className="details__button">Return</button></Link>
            <div className="details__a">
              <img src={pokemon.image} alt={`${pokemon.name} pokemon`} />
            </div>
            <div className="details__b">
                <div className="details__info">
                  <div className="details__name">
                    <h1>{pokemon.name}</h1>
                  </div>
                  <div className="details__details">
                      <p>Id: {pokemon.id}</p>
                      <p>Height: {pokemon.height}</p>
                      <p>Weight: {pokemon.weight}</p>
                      <p>Types: {pokemon.types?.map(t=>`${t.name}  `)}</p>
                      <p>Health Points (hp): {pokemon.hp}</p>
                      <p>Attack: {pokemon.attack}</p>
                      <p>Defense: {pokemon.defense}</p>
                      <p>Speed: {pokemon.speed}</p>
                    </div>
                </div>
            </div>
          </div>
        }
    </section>
  )
};

export default Details; 