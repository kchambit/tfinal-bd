import React from 'react'

const Login = () => {
  return (
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">Bienvendid@, Ya estas registrado?</h1>
            <p class="leading-relaxed mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam velit ipsam labore exercitationem? Accusantium, mollitia repellendus soluta rerum dolorum fuga!</p>
            </div>
            <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Identificarse</button>
            <p class="text-xs text-gray-500 mt-3">
                No estas registrado. Crea una nueva cuenta <a href="/signin">aqui</a></p>
            </div>
        </div>
    </section>
  )
}

export default Login