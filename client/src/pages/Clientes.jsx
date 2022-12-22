import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'  
const Clientes = () => {
    const [clientes, setClientes] = useState([])
    useEffect(() => {
        const fetchAllClientes = async () => {
            try {
                const res = await axios.get('http://localhost:8800/api/clientes')
                setClientes(res.data)
            } catch (error) {console.log(error)}
        } 
        fetchAllClientes()})
  return (
    <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex"><h1 className="text-3xl">Clientes</h1></div>
        <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr className="border-b">
                        <th className="text-left p-3 px-5">Codigo cliente</th>
                        <th className="text-left p-3 px-5">Nombres</th>
                        <th className="text-left p-3 px-5">Sexo</th>
                        <th></th>
                    </tr>
                    {clientes.map((cliente) => (
                        <tr className="border-b hover:bg-orange-100 bg-gray-100" key={cliente.Codigo_cliente}>
                            <td className="p-3 px-5">{cliente.Codigo_cliente}</td>
                            <td className="p-3 px-5">{cliente.Nombres}</td>
                            <td className="p-3 px-5">{cliente.Sexo}</td>
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

export default Clientes