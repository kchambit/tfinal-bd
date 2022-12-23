import React, {useState, useEffect} from 'react'

const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(window.sessionStorage.getItem('user'));
        setUser(user);
    }, []);

    const logout = () => {
        window.sessionStorage.removeItem('user');
        window.location.reload();
    }

  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className='h-10 w-12' src="vaina.png" alt="logo" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {(user && user.rol === 0) ?
            <div>
              <a href='/usuarios' className="mr-5 hover:text-gray-900">Usuarios</a>
              <a href='/clientes' className="mr-5 hover:text-gray-900">Clientes</a>
              <a href='/contratistas' className="mr-5 hover:text-gray-900">Contratistas</a>
              <a href='/serviciosadm' className="mr-5 hover:text-gray-900">Servicios</a>
              <a href='/about' className="mr-5 hover:text-gray-900">Nosotros</a>
            </div>
            : 
            <div>
              <a href='/servicios' className="mr-5 hover:text-gray-900">Servicios</a>
              {/* <a href='/about' className="mr-5 hover:text-gray-900">Nosotros</a> */}
            </div>
          }
        </nav>
        {user ?
          (<span className='font-bold '>Hola {user.user}!<button onClick={logout} className="mx-2 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mr-2 md:mt-0">Salir</button></span>)
          :
          (<a href='/login' className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mr-2 md:mt-0">Identificarse</a>)
        }
    </div>
    </header>
  )
}

export default Header