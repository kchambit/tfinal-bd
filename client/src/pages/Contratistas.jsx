import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'  

const Contratistas = () => {
    const [contratistas, setContratistas] = useState([])
    useEffect(() => {
        const fetchAllContratistas = async () => {
            try {
                const res = await axios.get('http://localhost:8800/api/clientes/contratistas')
                setContratistas(res.data)
            } catch (error) {console.log(error)}
        } 
        fetchAllContratistas()})
  return (
    <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex"><h1 className="text-3xl">Contratistas</h1></div>
        <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr className="border-b">
                        <th className="text-left p-3 px-5">Codigo contratista</th>
                        <th className="text-left p-3 px-5">Nombre_empresa</th>
                        <th className="text-left p-3 px-5">RUC</th>
                        <th></th>
                    </tr>
                    {contratistas.map((contratista) => (
                        <tr className="border-b hover:bg-orange-100 bg-gray-100" key={contratista.Codigo_contratista}>
                            <td className="p-3 px-5">{contratista.Codigo_contratista}</td>
                            <td className="p-3 px-5">{contratista.Nombre_empresa}</td>
                            <td className="p-3 px-5">{contratista.ruc}</td>
                            <td className="p-3 px-5 flex justify-end">
                            <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                            <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                        </tr>
                    ))}                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Contratistas