import { google } from "googleapis";
import { getServerSession } from "next-auth";
/*

const GOOGLE_ID = process.env.CLIENT_ID;
const GOOGLE_SECRET = process.env.CLIENT_SECRET;

const oauthClient = new google.auth.OAuth2(
  GOOGLE_ID,
  GOOGLE_SECRET,
  "http://localhost:3000",
);

export async function GET(request) {
  // Obtenemos los datos de autentificacion del usuario
  const sesion = await getServerSession(authOptions);

  // Verificamos si se encuentra autentificado
  // Si no manda 401 de que no esta autorizado
  if (!sesion) {
    return new Response(null, { status: 401 });
  }
  // Aplicamos un try en caso de que ocurra algun error
  try {
    // Obtenemos la autorizacion mediante el access_token para poder
    // a la cuenta y poder modificar el calendario
    oauthClient.setCredentials({ refresh_token: sesion.access_token });
    const calendario = google.calendar("v3");
    // Enlistamos todos los eventos en el calendario desde la fecha
    // en la que se lanza la consulta
    const respuesta = await calendario.events.list({
      auth: oauthClient,
      calendarId: "primary", // Seleccionamos el calendario primario
      timeMin: new Date().toISOString(),
      maxResults: 10, // Maximo de eventos
      singleEvents: true,
      orderBy: "startTime",
    });
    const eventos = respuesta.data.items;
    if (!eventos || eventos.length === 0) {
      console.log("No hay eventos");
      return;
    }
    console.log("Eventos proximos:");
    eventos.map((event, i) => {
      const start = event.start.dateTime || event.start.date;
      console.log(`${start} - ${event.summary}`);
    });
    return Response.json("Con sesion");
  } catch (error) {
    const errors = error.response.data;
    console.log(errors);
  }
}

export async function POST(request) {
  const sesion = await getServerSession(authOptions);
  if (!sesion) {
    return new Response({ "succes": false }, { status: 401 });
  }

  try {
    const {
      titulo,
      descripcion,
      lugar,
      fechaInicio,
      fechaFinal,
      correo,
      reunion,
    } = await request.json();

    oauthClient.setCredentials({ refresh_token: sesion.access_token });
    const calendario = google.calendar("v3");

    const response = await calendario.events.insert({
      auth: oauthClient,
      calendarId: "primary",
      requestBody: {
        summary: titulo,
        description: descripcion,
        location: lugar,
        colorId: "6",
        start: {
          dateTime: new Date(fechaInicio),
        },
        end: {
          dateTime: new Date(fechaFinal),
        },
      },
    });

    console.log(response);
    return Response.json({ "succes": true });
  } catch (error) {
    console.log(error);
    return Response.json({ "succes": false });
  }
}*/
