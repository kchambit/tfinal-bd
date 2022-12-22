import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./style.css"
// Components
import Header from "./components/Header"
// Pages
import Home from './pages/Home'
import Login from "./pages/Login"
import Clientes from "./pages/Clientes"
import Contratistas from "./pages/Contratistas"
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/contratistas" element={<Contratistas/>} />
          {/* <Route path="/update/:id" element={<Update/>} /> Ruta con id*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App