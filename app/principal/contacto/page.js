"use client"
import {useState} from 'react'

const Contacto =()=> {

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
		}catch(error){
			console.log(error)
		}
	}

	return (
			<div >
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
							value={form.email}
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
export default Contacto