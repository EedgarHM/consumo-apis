import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pokemon from "./components/Pokemon/Pokemon"
import { MainLayout } from "./layout/MainLayout"
import  PokemonHome  from "./pages/Pokemon/PokemonHome"
import Inicio from "./pages/Inicio"
import Movies from "./pages/Movies/Movies"
import RickMorty from "./pages/RM/RickMorty"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="pokemon/" element={<PokemonHome/>}/>
          <Route path="pokemon/:id" element={<Pokemon />} />
  
          <Route path="rick-morty" element={<RickMorty/>}/>
          <Route path="movies" element={<Movies/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
