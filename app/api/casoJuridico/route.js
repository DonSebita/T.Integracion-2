import conexionBD from "@/lib/cxDB";
import Caso from "@/models/Caso";
import clients from "@/models/Client";
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

export async function GET(request) {
  await conexionBD();

  try {
    const casos = await Caso.aggregate([
      {
        $lookup: {
          from: "abogados",
          localField: "abogado_id",
          foreignField: "_id",
          as: "Abogado_info",
        },
      },
      {
        $lookup: {
          from: "clients",
          localField: "cliente_id",
          foreignField: "_id",
          as: "Cliente_info",
        },
      },
    ]);

    casos.map((caso, indice) => {
      // Limpiamos los datos que necesamos
      {
        let abogado = caso.Abogado_info[0];
        if (abogado) {
          let { nombre, apellido, _id } = abogado;
          caso.Abogado_info = { nombre, apellido, _id };
        } else {
          caso.Abogado_info = {
            nombre: "Sin",
            apellido: "Asignacion",
            _id: "",
          };
        }
      }

      let cliente = caso.Cliente_info[0];
      if (cliente) {
        let { nombre, apellido } = cliente;
        caso.Cliente_info = { nombre, apellido };
      } else {
        caso.Cliente_info = { nombre: "Cliente", apellido: "Indefinido" };
      }
    });
    return Response.json(casos);
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}

export async function POST(request) {
  const { titulo, descripcion, abogado, cliente } = await request.json();
  await conexionBD();
  try {
    // Creamos el caso en base a los datos del formulario
    const res = await Caso.create({
      titulo: titulo,
      descripcion: descripcion,
      abogado_id: new ObjectId(abogado),
      cliente_id: new ObjectId(cliente),
      activo: abogado != "ffffffffffffffffffffffff" ? 1 : 2,
    });
    // Cambiamos el estado de asignado del contacto
    if (res) {
      await clients.findByIdAndUpdate(cliente, { asignado: true });
    }
    return Response.json({ succes: true, message: "Caso creado con exito" });
  } catch (error) {
    console.log(error);
    return Response.json({ succes: false, message: "Ah ocurrido un error" });
  }
}
