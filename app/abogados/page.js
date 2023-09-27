export default function Login() {
	return (
		<div>
			<form action="">
				<input 
					type        = "text"
					placeholder = "Ingrese RUT"
				/>

				<input 
					type        = "text"
					placeholder = "Ingrese Clave"
				/>

				<input type="submit" value="Enviar"/>
			</form>
		</div>
	)
}