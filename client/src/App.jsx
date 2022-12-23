import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./style.css"
// Components
import Header from "./components/Header"
// Pages
import Home from './pages/Home'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Usuarios from "./pages/Usuarios"
import Clientes from "./pages/Clientes"
import Contratistas from "./pages/Contratistas"
import Servicios from "./pages/Servicios"
import ServicePage from "./pages/ServicePage"
import ServiciosAdmin from "./pages/ServiciosAdmin"
import About from "./pages/About"
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/usuarios" element={<Usuarios/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/contratistas" element={<Contratistas/>} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="/servicios/:id" element={<ServicePage/>} />
          <Route path="/serviciosadm" element={<ServiciosAdmin/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/update/:id" element={<Update/>} /> Ruta con id*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App