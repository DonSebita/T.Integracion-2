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
    const { nombre, apellido, correo, telefono, mensaje } = await request
      .json();
    await clients.create({ nombre, apellido, correo, telefono, mensaje });
    return NextResponse.json({
      msg: ["Comentado con exito"],
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      succes: false,
    });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await conexionBD();
  await clients.findByIdAndDelete(id);
  return NextResponse.json({ message: "cliente eliminado" }, { status: 200 });
}

export async function PUT(request, { params }) {
  const id_cambiar = request.nextUrl.searchParams.get("id");
  //const update = { newNombre: nombre, newApellido: apellido, newCorreo: correo, newTelefono: telefono, newMensaje: mensaje } = await request.json();
  try {
    const { nombre, apellido, correo, telefono, mensaje } = await request
      .json();
    console.log(nombre, apellido);
    await conexionBD();
    await clients.findByIdAndUpdate(id_cambiar, {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      mensaje: mensaje,
    });
    return NextResponse.json({ message: "Datos actualizados", succes: true }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: "Hubo un error", succes: false }, {
      status: 201,
    });
  }
}
