import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema({
	nombre:{type: String, required:true},
	apellido:{type: String, required:true},
	correo:{type: String, required:true},
	telefono:{type: String, required:true},
	mensaje:String

})

export default mongoose.models.Client || mongoose.model("Client",clientSchema)