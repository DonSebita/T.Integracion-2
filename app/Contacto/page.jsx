import "../globals.css"
export default function contacto() {

	return (

		<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
			<div class="container max-w-screen-lg mx-auto">
				<div>
					<h2 class="font-semibold text-xl text-gray-600">Formulario de Contacto</h2>
					<p class="text-gray-500 mb-6">Rellena este formulario para comunicarte con uno de nuestros abogados</p>

					<div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
						<div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
							<div class="text-gray-600">
								<p class="font-medium text-lg">Datos Personales</p>
								<p>Porfavor completa todos los campos y un de nuestros profesionales se conctactara contigo.</p>
							</div>

							<div class="lg:col-span-2">
								<div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
									<div class="md:col-span-5">
										<label for="Nombre_Completo" class="font-semibold text-l text-gray-500">Nombre Completo</label>
										<input type="text" name="nombre" id="nombre" class="h-10 border mt-1 rounded px-4 w-full text-black"  />
									</div>

									<div class="md:col-span-5">
										<label for="correo" class="font-semibold text-l text-gray-500">Correo Electronico</label>
										<input type="text" name="correo" id="correo" class="h-10 border mt-1 rounded px-4 w-full text-black"  placeholder="CorreoElectronico@gmail.com" />
									</div>

									<div class="md:col-span-5">
										<label for="Ntelefonico" class="font-semibold text-l text-gray-500">Numero de Contacto</label>
										<input type="text" name="Ntelefonico" id="Ntelefonico" class="h-10 border mt-1 rounded px-4 w-full text-black" placeholder="" />
									</div>

									<div class="md:col-span-5">
										<div class="inline-flex items-center">
											<input type="checkbox" name="M_edad" id="M_edad" class="form-checkbox" />
											<label for="M_edad" class="font-semibold text-l text-gray-500">Eres mayor de edad</label>
										</div>
									</div>
									<div class="md:col-span-5">
									<textarea class="font-semibold text-l h-10 border mt-1 rounded px-4 w-full text-black" name="mensaje"  placeholder="Deje su Mensaje"></textarea>
									</div>
									<div class="md:col-span-5 text-right">
										<div class="inline-flex items-end">
											<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}