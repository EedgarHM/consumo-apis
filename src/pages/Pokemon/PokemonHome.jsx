import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import ListarPokemones from "../../components/Pokemon/ListarPokemones";
import Posts from '../../components/Posts'

const Pokemon = () => {
  // Guardaremos todos los pokemones en un estado
  const [pokemones, setPokemones] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrenPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(40);

  useEffect(() => {
    const getApi = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=500`;

        const apiResponse = await fetch(url);
        const result = await apiResponse.json();
        const data = result.results;
        setPosts(data);
        setPokemones(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
  }, []);

  // change page
  const paginate = (pageNumber) => {
    setPostPerPage(pageNumber)
  }
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
       <Posts posts={currentPosts} loading={loading}/>
      <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>

      <div className="grid grid-cols-3 gap-4">
        {pokemones.map((pokemon) => (
          <ListarPokemones
            pokemonName={pokemon.name}
            urlPokemon={pokemon.url}
          />
        ))}
      </div>
     
    </div>
  );
};

export default Pokemon;
