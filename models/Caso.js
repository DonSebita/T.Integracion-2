import mongoose, { Schema } from "mongoose";

const casoSchema = new Schema({
  titulo: {
    type: String,
    require: [true, "Es necesario un titulo"],
    trim: true,
  },
  descripcion: {
    type: String,
    require: [true, "Es requerida una descripcion"],
    trim: true,
  },
  fecha_creacion: {
    type: Date,
    default: Date.now,
    trim: true,
  },
  abogado_id: {
    type: Schema.Types.ObjectId,
    ref: "Abogado",
    default: null,
  },
  cliente_id: {
    type: Schema.Types.ObjectId,
    ref: "client",
    default: null,
  },
  activo:{
    type: Number,
    default: 0
  }
});

const Caso = mongoose.models.Caso ||
  mongoose.model("Caso", casoSchema);

export default Caso;
