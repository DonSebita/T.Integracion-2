import conexionBD from "@/lib/cxDB";
import Abogado from "@/models/Abogado";

import bcrypt from "bcryptjs";

export async function POST(request) {
  await conexionBD();
  const { nombre, apellido, rut, clave, claveRep, correo } = await request
    .json();

  console.log(nombre, apellido, rut, correo);
  const usuarioExist = await Abogado.findOne({ correo });

  if (usuarioExist) {
    return new Response(
      JSON.stringify({ info: "Correo ya existente", succes: false }),
      { status: 400 },
    );
  }
  if (clave != claveRep) {
    return new Response(
      JSON.stringify({ info: "Contraseñas Distintas", succes: false }),
      { status: 400 },
    );
  }

  const claveCifrada = await bcrypt.hash(clave, 5);
  try {
    const usuarioNuevo = await Abogado.create({
      nombre,
      apellido,
      rut,
      clave: claveCifrada,
      correo,
    });

    return new Response(
      JSON.stringify({ info: "Usuario Registrado", succes: true }),
      { status: 200 },
    );
  } catch (error) {
    console.log(error)
    return new Response(error, {
      status: 500,
    });
  }
}
