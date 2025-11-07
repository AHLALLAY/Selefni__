import { Routes, Route } from "react-router-dom"
import Connexion from "./pages/connexion"
import Home from "./pages/home"
import Layout from "./layouts/layouts"
import Simulation from "./pages/simulation"

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" index element={<Home/>}/>
            <Route path="/simulation" element={<Simulation/>}/>
            <Route path="/connexion" element={<Connexion/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
