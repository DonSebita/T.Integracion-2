/*import conexionBD from '@/lib/cxDB'
import Client from '@/models/Client'
import bcrypt from "bcryptjs";
import mongoose from "mongoose";*/

import conexionBD from "@/lib/cxDB";
import clients from "@/models/Client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET(request) {
  const data = await getServerSession(authOptions);
  if (data) {
    try {
      await conexionBD();
      const resultados = await clients.find();
      return Response.json(resultados);
    } catch (error) {
      console.log(error);
      return Response.json({ error: "Hubo un error al obtener los datos." });
    }
  }
}

export async function POST(request) {
  try {
    await conexionBD();
    const { nombre, apellido, correo, telefono, mensaje } = await request
      .json();

    const existe = await clients.find({
      $and: [
        { correo: { $eq: correo } },
        { mensaje: { $eq: mensaje } },
      ],
    });
    console.log(existe);
    if (existe.length == 0) {
      const creado = await clients.create({
        nombre,
        apellido,
        correo,
        telefono,
        mensaje,
      });

      if (creado) {
        return NextResponse.json({
          message: "Comentado con exito",
          success: true,
        });
      }
    }
    return NextResponse.json({
      message: "Comentario ya creado",
      succes: false,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Ocurrio un error",
      succes: false,
    });
  }
}

export async function DELETE(request) {
  const data = await getServerSession(authOptions);
  if (data) {
    const id = request.nextUrl.searchParams.get("id");
    await conexionBD();
    await clients.findByIdAndDelete(id);
    return NextResponse.json({ message: "cliente eliminado" }, { status: 200 });
  }
}

export async function PUT(request, { params }) {
  const data = await getServerSession(authOptions);
  if (data) {
    const id_cambiar = request.nextUrl.searchParams.get("id");
    //const update = { newNombre: nombre, newApellido: apellido, newCorreo: correo, newTelefono: telefono, newMensaje: mensaje } = await request.json();
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
    return NextResponse.json({ message: "Datos actualizados" }, {
      status: 200,
    });
  }
}
