<<<<<<< HEAD:app/Contacto/page.jsx
import "../globals.css";
import Link from "next/link";

export default function contacto() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a href="">
              <img class="w-auto h-10 mx-5" src="/logo.png" alt=""/>
        </a>
          <span class="font-semibold text-xl tracking-tight" src="/logo.png">Abogados</span>
        </div>

        <div
          id="menu"
          class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <a
              href=""
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Inicio
            </a>
            <a
              href="/Locales"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Locales
            </a>
            <a
              href=""
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Quienes Somos
            </a>
            <a
              href="/Contacto"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      <div class="min-h-screen p-5 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <h2 class="font-semibold my-6 text-xl text-gray-600">
              Formulario de Contacto
            </h2>

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-lg">Datos Personales</p>
                  <p>
                    Porfavor completa todos los campos y un de nuestros
                    profesionales se contactaran contigo.
                  </p>
                </div>

                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label
                        for="Nombre_Completo"
                        class="font-semibold text-l text-gray-500"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        class="h-10 border mt-1 rounded px-4 w-full text-black"
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label
                        for="correo"
                        class="font-semibold text-l text-gray-500"
                      >
                        Correo Electronico
                      </label>
                      <input
                        type="text"
                        name="correo"
                        id="correo"
                        class="h-10 border mt-1 rounded px-4 w-full text-black"
                        placeholder="CorreoElectronico@gmail.com"
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label
                        for="Ntelefonico"
                        class="font-semibold text-l text-gray-500"
                      >
                        Numero de Contacto
                      </label>
                      <input
                        type="text"
                        name="Ntelefonico"
                        id="Ntelefonico"
                        class="h-10 border mt-1 rounded px-4 w-full text-black"
                        placeholder=""
                      />
                    </div>

                    <div class="md:col-span-5">
                      <div class="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="M_edad"
                          id="M_edad"
                          class="form-checkbox"
                        />
                        <label
                          for="M_edad"
                          class="font-semibold text-l text-gray-500"
                        >
                          Eres mayor de edad
                        </label>
                      </div>
                    </div>
                    <div class="md:col-span-5">
                      <textarea
                        class="font-semibold text-l h-10 border mt-1 rounded px-4 w-full text-black"
                        name="mensaje"
                        placeholder="Deje su Mensaje"
                      ></textarea>
                    </div>
                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
          <div class="flex flex-col items-center text-center">
            <a href="">
              <img class="w-auto h-11" src="/logo.png" alt=""/>
            </a>

            <div class="flex flex-wrap justify-center mt-6 -mx-4">
              <a href="inicio" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" > Inicio </a>

              <a href="/Locales" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" > Locales </a>

              <a href="Quienes somos" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" > Quienes Somos </a>

              <a href="/Contacto" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" > Contacto </a>

            </div>

          </div>

          <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500 dark:text-gray-300">© Copyright 2023. Todos los derechos reservados.</p>

            <div class="flex -mx-2">

              <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
=======
import React from 'react'
import {useState} from 'react'

const contacto =()=> {

	const [form,setForm]= useState({
		nombre:'',
		apellido:'',
		correo:'',
		telefono:'',
		mensaje:''
	})

	const handleChange = e =>{
		const {value,name} = e.target
		setForm({
			...form,
			[name]:value
		})
	}

	const handleSubmit = e =>{

		e.preventDefault()
		postData(form)

	}

	const postData = async (form) => {
		try{

			console.log(form)
	
			const res = await fetch('/api/client',{				
				method:'POST',				
				headers: {
					"Content-type":"application/json"
				},
				body: JSON.stringify(form)
			})
	
			const data = await res.json()
			console.log(data)
	
		}catch(err){
			console.log(err)
		}
	}

	return (
			<div>

	    		<section>
		        	<h4>Formulario de Contacto</h4>
		        	<form onSubmit ={handleSubmit}>		       
				    	<input 
					    	
					    	type="text" 
					    	name="nombre" 
							autoComplete = "off"
							value={form.nombre}
							onChange={handleChange} 
					    	placeholder="Ingrese su Nombre"/>

				     	<input 
				     		
				     		type="text" 
				     		name="apellido" 
							autoComplete = "off"
							value={form.apellido}
							onChange={handleChange} 
				     		placeholder="Ingrese su Apellido"/>
				     	
						 <input 
							
							type="email" 
							name="correo" 
							autoComplete = "off"
							value={form.correo} // Cambia 'form.email' a 'form.correo'
							onChange={handleChange} 
							placeholder="Ingrese su Correo"/>
				        
				        <input 
				        	
				        	type="text" 
				        	name="telefono" 
							autoComplete = "off"
							value={form.telefono}
							onChange={handleChange} 
				        	placeholder="Ingrese su Número de Teléfono"/>
				        
				        <textarea 
				        	
				        	name="mensaje" 
							autoComplete = "off"
							value={form.mensaje}
							onChange={handleChange} 
				        	placeholder="Deje su Mensaje"></textarea>

			        	<input type="submit" value="Enviar"/>
	    			</form>
	    		</section>

	    	</div>  	
	)
}

export default contacto
>>>>>>> master:app/principal/contacto/page.jsx
