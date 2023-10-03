"use client"
import { useState } from 'react'


const Contacto = () => {

	const [form, setForm] = useState({
		nombre: '',
		apellido: '',
		correo: '',
		telefono: '',
		mensaje: ''
	})

	const handleChange = e => {
		const { value, name } = e.target
		setForm({
			...form,
			[name]: value
		})
	}

	const handleSubmit = e => {

		e.preventDefault()
		postData(form)

	}

	const postData = async (form) => {
		try {
			console.log(form)

			const res = await fetch('/api/client', {
				method: 'POST',
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(form)
			})

			const data = await res.json()
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
			<div class="container max-w-screen-lg mx-auto">
				<div>
					<h4 class="font-semibold text-xl text-gray-600">Formulario de Contacto</h4>
					<p class="text-gray-500 mb-6">Rellena este formulario para comunicarte con uno de nuestros abogados</p>

					<div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
						<div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
							<div class="text-gray-600">
								<p class="font-medium text-lg">Datos Personales</p>
								<p>Porfavor completa todos los campos.</p>
							</div>

							<form onSubmit={handleSubmit}>

								<div class="lg:col-span-2">
								<div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

								<div class="md:col-span-5">
									<label for="nombre" class="font-semibold text-l text-gray-500">Nombre</label>
									<input
										class="h-10 border mt-1 rounded px-4 w-full text-black"
										type="text"
										name="nombre"
										autoComplete="off"
										value={form.nombre}
										onChange={handleChange}
										placeholder="Ingrese su Nombre" />
								</div>

								<div class="md:col-span-5">
									<label for="apellido" class="font-semibold text-l text-gray-500">Apellido</label>
									<input
										class="h-10 border mt-1 rounded px-4 w-full text-black"
										type="text"
										name="apellido"
										autoComplete="off"
										value={form.apellido}
										onChange={handleChange}
										placeholder="Ingrese su Apellido" />
								</div>

								<div class="md:col-span-5">
									<label for="correo" class="font-semibold text-l text-gray-500">Correo Electronico</label>
									<input
										class="h-10 border mt-1 rounded px-4 w-full text-black"
										type="email"
										name="correo"
										autoComplete="off"
										value={form.email}
										onChange={handleChange}
										placeholder="Ingrese su Correo" />
								</div>
								<div class="md:col-span-5">
									<label for="Ntelefonico" class="font-semibold text-l text-gray-500">Numero de Contacto</label>
									<input
										class="h-10 border mt-1 rounded px-4 w-full text-black"
										type="text"
										name="telefono"
										autoComplete="off"
										value={form.telefono}
										onChange={handleChange}
										placeholder="Ingrese su Número de fono" />
								</div>
								<div class="md:col-span-5">
									<div class="inline-flex items-center">
										<input
											type="checkbox"
											name="M_edad"
											id="M_edad"
											class="form-checkbox" />
										<label
											for="M_edad"
											class="font-semibold text-l text-gray-500">Eres mayor de edad</label>
									</div>
								</div>
								<div class="md:col-span-5">
									<textarea
										class="font-semibold text-l h-10 border mt-1 rounded px-4 w-full text-black"
										name="mensaje"
										autoComplete="off"
										value={form.mensaje}
										onChange={handleChange}
										placeholder="Deje su Mensaje"></textarea>
								</div>

								<div class="md:col-span-5 text-right">
									<div class="inline-flex items-end">
										<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
									</div>
								</div>
								</div>
								</div>
							</form>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Contacto