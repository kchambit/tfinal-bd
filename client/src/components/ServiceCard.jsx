import React from 'react'
import {Link} from 'react-router-dom'

const ServiceCard = ({id, nombre, descripcion, precio, stock}) => {
  return (
    <Link to={`./${id}`} state={{id, nombre, descripcion, precio, stock}} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={`http://localhost:8800/images/${id}.jpg`}/>
        </a>
        <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{stock>0 ? "Disponible" : "Agotado"}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{nombre}</h2>
            <p className="mt-1">S/.{precio}</p>
        </div>
    </Link>
  )
}

export default ServiceCard