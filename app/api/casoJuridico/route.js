import conexionBD from "@/lib/cxDB";
import Caso from "@/models/Caso";
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
          let { nombre , apellido, _id } = abogado;
          caso.Abogado_info = { nombre, apellido, _id };
        } else {
          caso.Abogado_info = { nombre:"Sin", apellido:"Asignacion", _id: "" };
        }
      }

      let cliente = caso.Cliente_info[0];
      if (cliente) {
        let { nombre, apellido } = cliente;
        caso.Cliente_info = { nombre, apellido };
        console.log(caso);
      } else {
        caso.Cliente_info = { nombre:"Si", apellido:"Cliente" }; 
      }
    });

    //console.log(casos)
    return Response.json(casos);
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}

export async function POST(request) {
  const data = await request.json();
  await conexionBD();
  console.log(data);
  try {
    const res = await Caso.create({
      titulo: "Contrato de Arrendamiento",
      descripcion:
        "Caso en el que surge una disputa entre el propietario y el inquilino sobre los términos del contrato de arrendamiento, como el mantenimiento de la propiedad, el pago del alquiler, etc.",
      abogado_id: new ObjectId("ffffffffffffffffffffffff"),
      activo: 2,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  return Response.json({ aa: "Todo correctoaaaaa" });
}
