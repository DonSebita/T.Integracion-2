
/*import conexionBD from '@/lib/cxDB'
import Client from '@/models/Client'
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";*/

import conexionBD from "@/lib/cxDB";
import clients from "@/models/Client";

export async function GET(request) {
  try {
    await conexionBD();

    const resultados = await clients.find();
    const formattedResults = resultados.map((result) => ({
      nombre: result.nombre,
      apellido: result.apellido,
      correo: result.correo,
      telefono: result.telefono,
      mensaje: result.mensaje,
    }));

    return Response.json(formattedResults);
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

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'DELETE':
      try {
        const userId = req.query.id;
        const user = await User.findByIdAndRemove(userId);
        if (!user) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
      }
      break;

    default:
      res.status(405).json({ error: `El método ${method} no está permitido` });
      break;
  }
}

/*export async function POST(request: Request) {
  try {
    await connectDB();

    const { fullname, email } = await request.json();

    if (password < 6)
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );

    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 409,
        }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    console.log(savedUser);

    return NextResponse.json(
      {
        fullname,
        email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}*/