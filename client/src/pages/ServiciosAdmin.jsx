import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'  

const ServiciosAdmin = () => {
    const [servicios, setServicios] = useState([])
    const [serviceToUpdate, setServiceToUpdate] = useState()
    const [servicio, setServicio] = useState({
        id: '',
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
    })
    const [formState, setFormState] = useState('Editing')
    useEffect(() => {
        const fetchAllServicios = async () => {
            try {
                const res = await axios.get('http://localhost:8800/api/servicios')
                setServicios(res.data)
            } catch (error) {console.log(error)}
        } 
        fetchAllServicios()})

    const createService = async () => {    
        if(servicio.nombre === '' || servicio.descripcion === '' || servicio.precio === '') return
        try {
            await axios.post('http://localhost:8800/api/servicios', servicio)
            window.location.reload()
        } catch (error) {console.log(error)}
    }

    const deleteServicio = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/api/Servicios/${id}`)
            window.location.reload()
        } catch (error) {console.log(error)}
    }

    const editService = async (servicio) => {
        setServicio(servicio)
        setServiceToUpdate(servicio.id)
    }

    const updateService = async () => {
        if(servicio.nombre === '' || servicio.descripcion === '' || servicio.precio === '') return
        try {
            await axios.put(`http://localhost:8800/api/servicios/${serviceToUpdate}`, servicio)
            window.location.reload()
        } catch (error) {console.log(error)}
    }

    const handleChange = (e) => {
        setServicio({...servicio, [e.target.name]: e.target.value})
        console.log(serviceToUpdate)
    }

  return (
    <div className="text-gray-900 bg-gray-200 pb-20">
        <div className="p-4 flex"><h1 className="text-3xl">Servicios</h1></div>
        <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr className="border-b">
                        <th className="text-left p-3 px-5">ID</th>
                        <th className="text-left p-3 px-5">Nombre</th>
                        <th className="text-left p-3 px-5">Descripción</th>
                        <th className="text-left p-3 px-5">Precio</th>
                        <th className="text-left p-3 px-5">Stock</th>
                        <th></th>
                    </tr>
                    {servicios.map((servicio, index) => (
                        <tr className="border-b hover:bg-orange-100 bg-gray-100" key={index}>
                            <td className="p-3 px-5">{servicio.id}</td>
                            <td className="p-3 px-5">{servicio.nombre}</td>
                            <td className="p-3 px-5">{servicio.descripcion}</td>
                            <td className="p-3 px-5">{servicio.precio}</td>
                            <td className="p-3 px-5">{servicio.stock > 0 ? servicio.stock : "Agotado"}</td>
                            <td className="p-3 px-5 flex justify-end"></td>
                            <td>
                                <button onClick={()=>editService(servicio)} type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                                <button onClick={()=>deleteServicio(servicio.id)} type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                    ))}    
                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                            <td className="p-3 px-5"></td>
                            <td className="p-3 px-5"></td>
                            <td className="p-3 px-5"></td>
                            <td className="p-3 px-5"></td>
                            <td className="p-3 px-5"></td>
                            <td className="p-3 px-5 flex justify-end"></td>
                            <td><button onClick={()=>addServicio(servicio.service)} type="button" className="text-sm bg-gray-500 hover:bg-gray-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Agregar +</button></td>
                    </tr>               
                </tbody>
            </table>
        </div>
        {/* Form to edit services, (Arreglar esto pa que sea una fila debajo de la tabla)*/}
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Editar servicio</h2>
            <div className="relative mb-2">
                <label htmlFor="id">Id</label>
                <input type="text" name="id" onChange={handleChange} value={servicio.id} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-2">
                <label htmlFor="nombre" className="leading-7 text-sm text-gray-600">Nombre</label>
                <input type="text" name="nombre" onChange={handleChange} value={servicio.nombre} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-2">
                <label htmlFor="descripcion" className="leading-7 text-sm text-gray-600">Descripcion</label>
                <input type="text" name="descripcion" onChange={handleChange} value={servicio.descripcion} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-2">
                <label htmlFor="precio" className="leading-7 text-sm text-gray-600">Precio</label>
                <input type="text" name="precio" onChange={handleChange} value={servicio.precio} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-2">
                <label htmlFor="stock" className="leading-7 text-sm text-gray-600">Stock</label>
                <input type="number" name="stock" onChange={handleChange} value={servicio.stock} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button onClick={()=>updateService()} type="button" className="mr-3 text-sm bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
            <button onClick={()=>createService()} type="button" className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Crear</button>
        </div>
    </div>
  )
}

export default ServiciosAdmin