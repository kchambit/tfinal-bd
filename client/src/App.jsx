import {BrowserRouter, Routes, Route} from "react-router-dom"
// Components
import Header from "./components/Header"
// Pages
import Home from './pages/Home'
import Login from "./pages/Login"
import Books from "./pages/Books"
import "./style.css"
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/books" element={<Books/>} />
          {/* <Route path="/update/:id" element={<Update/>} /> Ruta con id*/}
        </Routes>
      </BrowserRouter>
      <a href="/books">prueba</a>
    </div>
  )
}

export default App
