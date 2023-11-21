import conexionBD from "@/lib/cxDB";
import Abogado from "@/models/Abogado";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  await conexionBD();
  try {
    const datos = await Abogado.find({});
    let resultado = datos.map(({ _id, nombre, apellido, correo }) => ({
      _id,
      nombre,
      apellido,
      correo,
    }));
    console.log(resultado)
    return  Response.json( resultado );
  } catch (error) {
    console.log(error);
    return new Response({ succes: false, message: "a sucedio un error" });
  }
}

export async function PUT(request) {
  const { nombre, apellido, correo, rut } = await request.json();

  await conexionBD();
  try {
    const { user } = await getServerSession(authOptions);
    const { id } = user;
    if (user) {
      const datos = await Abogado.findOneAndUpdate({ _id: id }, {
        nombre,
        apellido,
        correo,
        rut,
      });
      return Response.json({ succes: true, message: "Cambiado correctamente" });
    }
  } catch (error) {
    console.log(error);
    return Response({ succes: false, message: "a sucedio un error" });
  }
}
