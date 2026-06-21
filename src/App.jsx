import { Route, Routes } from "react-router"
import { Header } from "./common/components/Header/Header"
import { HomePage } from "./pages/HomePage/HomePage"
import { EpisodesPage } from "./pages/EpisodesPage/EpisodesPage"
import { LocationsPage } from "./pages/LocationsPage/LocationsPage"
import { CharactersPage } from "./pages/CharactersPage/CharactersPage"
 
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/RickAndMorty" element={<HomePage />}/> 
        <Route path="/RickAndMorty/episodes" element={<EpisodesPage/>}/>
        <Route path="/RickAndMorty/locations" element={<LocationsPage/>}/>
        <Route path="/RickAndMorty/characters" element={<CharactersPage/>}/>
      </Routes>
    </div>
  )
}
export default App