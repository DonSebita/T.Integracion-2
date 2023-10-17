import mongoose, { Schema } from "mongoose";

const abogadosSchema = new Schema({
  rut: {
    type: String,
    require: [true, "El RUT es requerido"],
    trim: true,
  },
  clave: {
    type: String,
    require: [true, "La contraseña es requerida"],
    trim: true,
  },
});

const Abogado = mongoose.models.Abogado || mongoose.model("Abogado", abogadosSchema)

export default Abogado