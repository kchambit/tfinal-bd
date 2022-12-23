import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const ServicePage = () => {
    const location = useLocation()
    const {id, nombre, descripcion, precio, stock} = location.state
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(window.sessionStorage.getItem('user'));
        setUser(user);
    }, []);

    const buyService = () => {
        if(user) alert("Comprando servicio")
        else alert("Inicie sesión para comprar")
    }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Vaina</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{nombre}</h1>
                <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Descripcion</a>
                </div>
                <p className="leading-relaxed mb-4">{descripcion}</p>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Stock</span>
                <span className="ml-auto text-gray-900">{stock}</span>
                </div>
                <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">S/.{precio}</span>
                <button onClick={()=>buyService()} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Comprar</button>
                </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`http://localhost:8800/images/${id}.jpg`}/>
            </div>
        </div>
        </section>
  )
}

export default ServicePage