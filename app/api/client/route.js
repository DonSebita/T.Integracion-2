
/*import conexionBD from '@/lib/cxDB'
import Client from '@/models/Client'
import bcrypt from "bcryptjs";
import mongoose from "mongoose";*/

import conexionBD from "@/lib/cxDB";
import clients from "@/models/Client";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await conexionBD();

    const resultados = await clients.find();
    return Response.json(resultados);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Hubo un error al obtener los datos." });
  }
}


export async function POST(request) {
  try {
    await conexionBD();
    const { nombre, apellido, correo, telefono, mensaje } = await request.json();
    await clients.create({ nombre, apellido, correo, telefono, mensaje });
    return NextResponse.json({
      msg: ["Comentado con exito"],
      success: true,
    });
  } catch (error) 
{    console.log(error);
    return NextResponse.json({
      succes: false
    })
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await conexionBD(); 
  await clients.findByIdAndDelete(id);
  return NextResponse.json({ message: "cliente eliminado" }, { status: 200 });
}
