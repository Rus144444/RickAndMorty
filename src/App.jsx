import { Route, Routes } from "react-router"
import { Header } from "./common/components/Header/Header"
import { HomePage } from "./pages/HomePage/HomePage"
import { EpisodesPage } from "./pages/EpisodesPage/EpisodesPage"
import { LocationsPage } from "./pages/LocationsPage/LocationsPage"
import { CharactersPage } from "./pages/CharactersPage/CharactersPage"
import { Character } from "./pages/CharactersPage/Character/Character"
import { Location } from "./pages/LocationsPage/Location/Location"
import { Episode } from "./pages/EpisodesPage/Episode/Episode"
 
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/RickAndMorty" element={<HomePage />}/> 
        <Route path="/RickAndMorty/episodes" element={<EpisodesPage/>}/>
        <Route path="/RickAndMorty/episodes/:id" element={<Episode/>}/>
        <Route path="/RickAndMorty/characters" element={<CharactersPage/>}/>
        <Route  path="/RickAndMorty/characters/:id" element={<Character />}/>
        <Route path="/RickAndMorty/locations" element={<LocationsPage/>}/>
        <Route path="/RickAndMorty/locations/:id" element={<Location/>}/>
      </Routes>
    </div>
  )
}
export default App