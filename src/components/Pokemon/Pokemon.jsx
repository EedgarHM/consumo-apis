import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiShow } from "react-icons/bi";

const Pokemon = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [images, setImages] = useState([]);
  const [nombre, setNombre] = useState("");
  const [type, setType] = useState("");
  const [shiny, setShiny] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        console.log(url);
        const apiResponse = await fetch(url);
        const result = await apiResponse.json();

        setInfo(result);
        setImages(result.sprites.other.home);
        setNombre(result.name);
        setType(result.types[0].type.name);
        
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
  }, []);
  console.log(images);
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

  return (
    <div className={`bg-slate-800 p-2 text-teal-500  text-center border-4 border-slate-200 rounded-3xl`}>
      <h1 className={`p-5 text-3xl `}>
        {nombre.toUpperCase()}
      </h1>
      <hr />

      <div className="grid grid-cols-2 gap-4 p-5">
        <div className="flex flex-col">
          <div className={`w-full 
                rounded-full h-full
                 ${coloresBG[type]}
                 `}>
          <img
          className="w-full justify-end text-right align-middle"
            src={!shiny ?  images.front_default : images.front_shiny}
            
          />
          </div>

          <div className="flex text-center justify-center alig">
          <button
            type="button"
            className=" text-3xl flex w-full text-center justify-center"
            onClick={() => setShiny(true)}
          >
            <BiShow className={`mt-1 mr-5 ${ shiny ? "text-teal-500" : "text-teal-900"}`} /> <span className={shiny ? "text-teal-500" : "text-teal-900"}>Ver Shiny</span>
          </button>
        
          <button
            type="button"
            className=" text-3xl flex w-full text-center justify-center"
            onClick={() => setShiny(false)}
          >
            <BiShow className={`mt-1 mr-5 ${  !shiny ? "text-teal-500" : "text-teal-900"}`} /> <span className={
                !shiny ? "text-teal-500" : "text-teal-900"
            }>Ver Normal</span>
          </button>
          </div>
        </div>

        
        <div>
          <h1>Hola</h1>
        </div>
      </div>

      {/* <div
        className="rounded shadow-lg flex p-10  h-5/6 space-x-8 justify-between ">
        {console.log(type)}
        <img
          class={`h-5/6 object-cover mt-0 justify-center  rounded-full 
          ${coloresBG[type]}
          `}
          src={images.front_default}
        />

        <div className="text-white justify-center text-center w-full">
          <h1>Informacion</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Pokemon;
