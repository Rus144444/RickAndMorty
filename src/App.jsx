import { Route, Routes } from "react-router"
import { Header } from "./common/components/Header/Header"
import { HomePage } from "./pages/HomePage/HomePage"
import { EpisodesPage } from "./pages/EpisodesPage/EpisodesPage"
import { LocationsPage } from "./pages/LocationsPage/LocationsPage"
import { CharactersPage } from "./pages/CharactersPage/CharactersPage"
 
function App() {
  return (
    <div>
      <Routes>
        <Header/>
        <Route path="/" element={<HomePage />}/> 
        <Route path="/episodes" element={<EpisodesPage/>}/>
        <Route path="/locations" element={<LocationsPage/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
      </Routes>
    </div>
  )
}
export default App