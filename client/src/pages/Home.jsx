import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Los Mejores En Construcción Inmobiliaria</h1>
      <p className="lg:w-2/3 mx-auto mb-5 leading-relaxed text-base">
        Para todos los que buscan construir, remodelar o reparar, Vaina es la mejor opción, para cualquier tipo de bolsillo.
      </p>
      <img className="lg:w-2/3 mx-auto leading-relaxed rounded-md" src="./home.jpg" alt="homeImg" />
    </div>
  )
}

export default Home