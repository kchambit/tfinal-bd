import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import "./style.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/update/:id" element={<Update/>} /> Ruta con id*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
