
export default function contacto() {

	return (
		
			<div>
	    		<section >
		        	<h4>Formulario de Contacto</h4>
		        	<form>		       
				    	<input 
					    	 
					    	type="text" 
					    	name="nombre" 
							autoComplete = "off"
							
							 
					    	placeholder="Ingrese su Nombre"/>

				     	<input 
				     		 
				     		type="text" 
				     		name="apellido" 
							autoComplete = "off"
							
							 
				     		placeholder="Ingrese su Apellido"/>
				     	
				     	<input 
				     		 
				     		type="email" 
				     		name="correo" 
							autoComplete = "off"
							
							 
				     		placeholder="Ingrese su Correo"/>
				        
				        <input 
				        	 
				        	type="text" 
				        	name="telefono" 
							autoComplete = "off"
							
							 
				        	placeholder="Ingrese su Número de Teléfono"/>
				        
				        <textarea 
				        	 
				        	name="mensaje" 
							autoComplete = "off"
							
							 
				        	placeholder="Deje su Mensaje"></textarea>

			        	<input  type="submit" value="Enviar"/>
	    			</form>
	    		</section>
				</div>
    	
	)
}

