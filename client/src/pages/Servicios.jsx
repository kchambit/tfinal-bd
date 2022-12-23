import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'  
import ServiceCard from '../components/ServiceCard'

const Productos = () => {
  const [servicios, setServicios] = useState([])
  useEffect(() => {
    const fetchAllServicios = async () => {
      try {
          const res = await axios.get('http://localhost:8800/api/servicios')
          setServicios(res.data)
      } catch (error) {console.log(error)}
    } 
    fetchAllServicios()})

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Service card component */}
          {servicios.map(servicio => (
            <ServiceCard key={servicio.id} id={servicio.id} nombre={servicio.nombre} descripcion={servicio.descripcion} precio={servicio.precio} stock={servicio.stock}/>  
          ))}
        </div>
      </div>
    </section>
  )
}

export default Productos