import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'  

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    const [userToUpdate, setUserToUpdate] = useState('')
    const [usuario, setUsuario] = useState({
        user: '',
        password: '',
        rol: 0
    })
    useEffect(() => {
        const fetchAllUsuarios = async () => {
            try {
                const res = await axios.get('http://localhost:8800/api/usuarios')
                setUsuarios(res.data)
            } catch (error) {console.log(error)}
        } 
        fetchAllUsuarios()})

    const deleteUsuario = async (username) => {
        try {
            await axios.delete(`http://localhost:8800/api/usuarios/${username}`)
            window.location.reload()
        } catch (error) {console.log(error)}
    }

    const editUser = async (usuario) => {
        setUsuario(usuario)
        setUserToUpdate(usuario.user)
    }

    const updateUser = async (username) => {
        if(usuario.user === '' || usuario.password === '' || usuario.rol === '') return
        try {
            await axios.put(`http://localhost:8800/api/usuarios/${username}`, usuario)
            window.location.reload()
        } catch (error) {console.log(error)}
    }

    const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name]: e.target.value})
        console.log(usuario)
    }

  return (
    <div className="text-gray-900 bg-gray-200 pb-20">
        <div className="p-4 flex"><h1 className="text-3xl">Usuarios</h1></div>
        <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr className="border-b">
                        <th className="text-left p-3 px-5">Nombre de usuario</th>
                        <th className="text-left p-3 px-5">Contraseña</th>
                        <th className="text-left p-3 px-5">Rol</th>
                        <th></th>
                    </tr>
                    {usuarios.map((usuario, index) => (
                        <tr className="border-b hover:bg-orange-100 bg-gray-100" key={index}>
                            <td className="p-3 px-5">{usuario.user}</td>
                            <td className="p-3 px-5">{usuario.password}</td>
                            <td className="p-3 px-5">{usuario.rol === 0 ? "Admin" : "Usuario"}</td>
                            <td className="p-3 px-5 flex justify-end">
                            <button onClick={()=>editUser(usuario)} type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                            <button onClick={()=>deleteUsuario(usuario.user)} type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                        </tr>
                    ))}                   
                </tbody>
            </table>
        </div>
        {/* Form to edit users */}
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Editar usuario</h2>
            <div className="relative mb-4">
                <label htmlFor="user">Nombre de usuario</label>
                <input type="text" name="user" onChange={handleChange} value={usuario.user} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Clave</label>
                <input type="text" name="password" onChange={handleChange} value={usuario.password} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
            <select name="rol" onChange={handleChange} value={usuario.rol} className="w-full bg-white rounded border border-gray-300">
                <option value="0">Admin</option>
                <option value="1">Usuario</option>
            </select>   
            </div>
            <button onClick={()=>updateUser(userToUpdate)} type="button" className="mr-3 text-sm bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
        </div>
    </div>
  )
}

export default Usuarios