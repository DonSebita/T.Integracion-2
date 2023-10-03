import conexionBD from "@/lib/cxDB";
import Cliente from "@/models/Client";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { nombre, apellido, correo, telefono, mensaje } = await request.json();

  try {
    await conexionBD();
    await Cliente.create({ nombre, apellido, correo, telefono, mensaje })

    return NextResponse.json({
      msg: ["Comentado con exito"],
      success: true,
  });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidatorError) {
  let errorList = [];
      for (let e in error.errors) {
        errorList.push(e.mensaje);
      }

      return NextResponse.json({ msg: errorList });
  } else {
      return NextResponse.json({ msg: "Unable to send message." });
    }
  }
}
