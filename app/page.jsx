import "./globals.css";
import CardInfo from "../components/cardinfo";
import Footbar from "@/components/footbar";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Especifico from "@/components/especificos";

const images = [
  "/Image/inicio/Abogados1.jpg",
  "/Image/inicio/Abogados1.jpg",
  // ...agrega más imágenes según sea necesario
];
const valores = [
  {
    nombre: "Integridad y Ética",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    descripcion:
      "Somos un equipo que se adhiere rigurosamente a los más altos estándares éticos y legales. La integridad es la base de nuestra reputación y la confianza que nuestros clientes depositan en nosotros.",
  },
  {
    nombre: "Compromiso con el Cliente",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
    descripcion:
      "Nuestra prioridad es el éxito y la satisfacción de nuestros clientes. Escuchamos atentamente sus necesidades y trabajamos incansablemente para proporcionar soluciones legales efectivas y personalizadas.",
  },
  {
    nombre: "Excelencia Legal",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
    descripcion:
      "Buscamos constantemente la excelencia en todo lo que hacemos. Nuestros abogados están altamente capacitados y actualizados con las últimas tendencias legales para brindar asesoramiento y representación excepcionales.",
  },
  {
    nombre: "Accesibilidad y Comunicación Transparente",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full"   
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
    descripcion:
      "Creemos en mantener líneas de comunicación abiertas y transparentes con nuestros clientes. Estamos disponibles para responder preguntas y proporcionar actualizaciones oportunas sobre sus casos.",
  },
];

const Area = [
  {
    nombre: "Derecho Penal",
    descripcion:
      "Nosotros te representamos en casos criminales, protegiendo tus derechos en el sistema legal.",
  },
  {
    nombre: "Derecho Civil",
    descripcion:
      "Somos expertos en disputas contractuales y problemas legales relacionados con propiedad y daños personales.",
  },
  {
    nombre: "Derecho Laboral",
    descripcion:
      "Te asesoramos en cuestiones laborales, desde despidos injustos hasta discriminación en el trabajo.",
  },
  {
    nombre: "Derecho de Familia",
    descripcion:
      "Nos ocupamos de asuntos familiares como divorcios, custodia de hijos y adopciones, protegiendo tus intereses familiares.",
  },
  {
    nombre: "Derecho Comercial",
    descripcion:
      "Brindamos asesoramiento legal en temas empresariales, desde la creación de negocios hasta disputas contractuales y cumplimiento normativo.",
  },
];

export default function Home() {
  return (
    <main className="grid grid-flow-row auto-rows-max bg-primero max-w-max sm:max-w-max">
      <Navbar />
      <div className="grid grid-flow-row auto-rows-max hover:auto-rows-min">
        <section className="w-full">
          <div className="mx-auto relative shadow-md">
            <Image
              className="w-full h-auto object-cover"
              src={"/Image/inicio/InicioWeb.jpg"}
              height={2283}
              width={7500}
              alt="imagen_inicio"
            />
            <div className="absolute bottom-0 left-0 right-0 h-auto bg-black bg-opacity-60 backdrop-blur text-white p-4 md:px-32 py-4">
              <h1 className="text-white text-2xl sm:text-4xl font-bold">Décadas de Experiencia Legal a Su Servicio</h1>
              <p className="text-white text-base sm:text-lg py-4">
                Con un legado de experiencia que abarca varias décadas, hemos
                acumulado un profundo conocimiento y una sabiduría inigualable
                en la resolución de una amplia gama de problemas legales. A lo
                largo de los años, nuestra dedicación incansable a servir a
                nuestros clientes nos ha permitido perfeccionar el arte de
                encontrar soluciones efectivas y resultados satisfactorios en
                las situaciones legales más complejas. Esta larga historia de
                éxito y compromiso es la base sólida en la que nuestros clientes
                confían para navegar con confianza el mundo legal.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-segundo w-full px-12 sm:px-10 lg:px-20 2xl:px-52 pb-14 ">
          <h1 className="grid justify-items-center my-8 text-xl sm:text-2xl text-black">
            Nuestros Valores
          </h1>
          <div className="grid grid-col-1 
            sm:grid-cols-2 sm:px-6 sm:gap-2 md:grid-cols-2 md:gap2
            lg:grid-cols-2 
            xl:grid-cols-4 xl:px-16">
            {valores.map((valor, index) => (
              <CardInfo
                className="bg-tercero text-black"
                key={index}
                svg={valor.svg}
                Titulo={valor.nombre}
                Descripcion={valor.descripcion}
              />
            ))}
          </div>
        </section>

        <section className="py-8 sm:py-16">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl text-black pb-4 sm:pb-8">
            Áreas de especialización
          </h1>
          <div className="flex flex-wrap gap-4 px-16 sm:gap-4 lg:gap-8 justify-center sm:px-8 md:px-12 lg:px-16 xl:px-64">
            {Area.map((espe, index) => (
              <div
                key={index}
                className="flex flex-col w-2/5 sm:w-1/2 md:w-1/3 
      lg:w-1/4 xl:w-2/6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 mb-4 sm:mb-6 shadow-md focus:border-2 border-black"
              >
                <Image
                  className="w-2/3  sm:w-2/3 md:w-1/2 rounded-full self-center mx-auto"
                  src={"/Image/inicio/Mediador.jpg"}
                  width={500}
                  height={500}
                  alt="Imagen de Ayuda"
                />
                <h3 className="font-bold text-black text-center pt-2 sm:pt-4 text-lg sm:text-xl">
                  {espe.nombre}
                </h3>
                <p className="text-black text-sm sm:text-base text-center">
                  {espe.descripcion}
                </p>
              </div>
            ))}
          </div>
        </section>

        {
          /*
        <section className="h-auto">
          <h1 className="text-center text-black">Conoce a nuestro equipo</h1>
          <p>aaaa</p>
        </section>*/
        }
      </div>
    </main>
  );
}
