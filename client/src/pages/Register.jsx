import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({username: "",password: "", rol: 1});
  const [err, setErr] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      if(inputs.username === "" || inputs.password === "") return setErr("Todos los campos son obligatorios");
      else if(inputs.username.length < 4) return setErr("El usuario debe tener al menos 4 caracteres")
      else if(inputs.password.length < 4) return setErr("La clave debe tener al menos 4 caracteres")
      else{
        try {
          const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
          if(res.data) navigate("/login")
        } 
        catch (error) {setErr(error.response.data)}
      } 
  };

return (
  <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">Bienvendid@, Eres nuevo aqui?</h1>
          <p className="leading-relaxed mt-4">Registrate para ser uno mas de la familia VAINA</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Registrate</h2>
          <div className="relative mb-4">
              <label htmlFor="username" className="leading-7 text-sm text-gray-600">Usuario</label>
              <input type="text" name="username" onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Clave</label>
              <input type="password" name="password" onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button onClick={handleSubmit} className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Identificarse</button>
          {err && <p className="text-red-500 text-xs">{err}</p>}
          </div>
      </div>
  </section>
)
}

export default Register