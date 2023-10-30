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
    descripcion:
      "Somos un equipo que se adhiere rigurosamente a los más altos estándares éticos y legales. La integridad es la base de nuestra reputación y la confianza que nuestros clientes depositan en nosotros.",
  },
  {
    nombre: "Compromiso con el Cliente",
    descripcion:
      "Nuestra prioridad es el éxito y la satisfacción de nuestros clientes. Escuchamos atentamente sus necesidades y trabajamos incansablemente para proporcionar soluciones legales efectivas y personalizadas.",
  },
  {
    nombre: "Excelencia Legal",
    descripcion:
      "Buscamos constantemente la excelencia en todo lo que hacemos. Nuestros abogados están altamente capacitados y actualizados con las últimas tendencias legales para brindar asesoramiento y representación excepcionales.",
  },
  {
    nombre: "Accesibilidad y Comunicación Transparente",
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
      <Navbar/>
      <div className="grid grid-flow-row auto-rows-max hover:auto-rows-min">
        <section className="w-full">
          <div className="relative w-full">
            <div className="static inset-0">
              <Image
                className="w-full h-auto inline-block"
                src={"/Image/inicio/InicioWeb.jpg"}
                height={2283}
                width={7500}
                alt="imagen_inicio"
              />|
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60">
              </div>
            </div>
            <div className="sm:relative md:absolute inset-x-0 bottom-0 
              p-4 bg-black w-full sm:w-full bg-opacity-50 px-4
              sm:px-8 lg:px-32">
              <h1 className="text-white text-2xl sm:text-4xl font-bold">
                Décadas de Experiencia Legal a Su Servicio
              </h1>
              <p className="text-white text-base sm:text-lg py-4">
               Con un legado de experiencia que abarca varias décadas, hemos acumulado un profundo conocimiento y una sabiduría inigualable en la resolución de una amplia gama de problemas legales. A lo largo de los años, nuestra dedicación incansable a servir a nuestros clientes nos ha permitido perfeccionar el arte de encontrar soluciones efectivas y resultados satisfactorios en las situaciones legales más complejas. Esta larga historia de éxito y compromiso es la base sólida en la que nuestros clientes confían para navegar con confianza el mundo legal.              </p>
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
            {valores.map((valor,index) => (
              <CardInfo className="bg-tercero text-black" key={index}  Titulo={valor.nombre} Descripcion={valor.descripcion} />
            )
            )}           
          </div>
        </section>

        <section className="py-8 sm:py-16">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl text-black pb-4 sm:pb-8">
            Áreas de especialización
          </h1>
          <div className="flex flex-wrap gap-4 px-16 sm:gap-4 lg:gap-8 justify-center sm:px-8 md:px-12 lg:px-16 xl:px-64">
            {Area.map((espe, index) => (
              <div key={index} className="flex flex-col w-2/5 sm:w-1/2 md:w-1/3 
      lg:w-1/4 xl:w-2/6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 mb-4 sm:mb-6 shadow-md focus:border-2 border-black">
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
