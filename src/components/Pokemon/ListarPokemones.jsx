import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {FcInfo} from 'react-icons/fc'
import { MdCatchingPokemon} from 'react-icons/md'
import Modal from "../Modal";
const ListarPokemones = ({ pokemonName, urlPokemon }) => {
  const [moves, setMoves] = useState([]);
  const [images, setImages] = useState([]);
  const [typePokemon, setTypePokemon] = useState([]);
  const [info, setInfo] = useState([]);

  const [showModal, setShowModal ] = useState(false);



  const coloresBG = {
    normal: "bg-normal",
    fire: "bg-fire",
    water: "bg-water",
    electric: "bg-electric",
    grass: "bg-grass",
    ice: "bg-ice",
    fighting: "bg-fighting",
    poison: "bg-poison",
    ground: "bg-ground",
    flying: "bg-flying",
    psychic: "bg-psychic",
    bug: "bg-bug",
    rock: "bg-rock",
    ghost: "bg-ghost",
    dragon: "bg-dragon",
    dark: "bg-dark",
    steel: "bg-steel",
    fairy: "bg-fairy",
  };

  const navigate = useNavigate();

  useEffect(() => {
    const getApi = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

        console.log(url);
        const apiResponse = await fetch(url);
        const result = await apiResponse.json();

        setImages(result.sprites.other.home);
        setTypePokemon(result.types);
        setInfo(result);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
  }, []);
  return (
    <div>
      {console.log(images)}
      <div class="max-w-sm rounded overflow-hidden shadow-2xl border-2">
        <p className="p-2 bg-slate-800 text-white font-bold ">{info.id}</p>
        <img
          class="w-full"
          src={`${images.front_default}`}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 border-t-2">
          <div class="font-bold text-xl mb-2 ">{pokemonName.toUpperCase()}</div>
          <div className="md:flex space-x-4">
            <div className="md:w-2/4">
              <p class="text-gray-700 ">
                <span className="font-bold">Altura: </span>
                {info.height} ft
              </p>
              <p class="text-gray-700 ">
                <span className="font-bold">Peso: </span>
                {info.weight} ft
              </p>
            </div>
            <div className="md:block text-right md:w-2/4">
              
                <button 
                    type='button'
                    className='flex w-full text-right justify-end'
                    onClick={()=> navigate(`/pokemon/${info.name}`)}
                >
                    <FcInfo className="text-xl inline-block align-baseline"/>
                </button>
                <button 
                    type='button'
                    className='flex w-full text-right justify-end'
                    onClick={()=>setShowModal(true)}
                >
                    <MdCatchingPokemon 
                      className="text-xl inline-block text-red-600"
                      
                    />
                </button>
            </div>
          </div>

         
        </div>
        <div class="px-6 pt-4 pb-2">
          {typePokemon.map((t) => (
            <span
              className={`${
                coloresBG[t.type.name]
              } inline-block  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      {
        showModal ? <Modal images={images}/> : null
      }
    </div>
  );
};

export default ListarPokemones;
