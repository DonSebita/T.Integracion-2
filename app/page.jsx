import "./globals.css";
import CardInfo from "../components/cardinfo";
import Footbar from "@/components/footbar";
import Navbar from "@/components/navbar";
import Image from "next/image";

const images = [
  "/Image/inicio/Abogados1.jpg",
  "/Image/inicio/Abogados1.jpg",
  // ...agrega más imágenes según sea necesario
];

export default function Home() {
  return (
    <main className="grid grid-flow-row auto-rows-max bg-primero">
      <div className="grid grid-flow-row auto-rows-max hover:auto-rows-min">
        <section className="w-full auto">
          
        </section>

        <section className="bg-segundo w-auto px-52 pb-14">
          <h1 className="grid justify-items-center my-8 text-2xl text-black">
            Nuestros Valores
          </h1>
          <div className="grid grid-cols-4 justify-center px-32">
            <CardInfo className="bg-blue-500 w-full" />

            <CardInfo className="bg-orange-500 w-full" />

            <CardInfo className="bg-blue-500 w-full" />

            <CardInfo className="bg-orange-500 w-full" />
          </div>
        </section>

        <section className="py-16">
          <h1 className="text-center text-black pb-8">
            Areas especiabilizacion
          </h1>
          <div className="flex flex-wrap gap-5 justify-center px-56">
            <div className="flex flex-col w-1/4 px-8 py-8 bg-segundo rounded-s">
              <Image
                className="w-2/3 rounded-full self-center"
                src={"/Image/inicio/Mediador.jpg"}
                width={500}
                height={500}
              />
              <h3 className="font-bold text-black text-center pt-4 ">Titulo Ayuda</h3>

              <p className="text-black">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet.
              </p>
            </div>

            <div className="flex flex-col w-1/4 px-8 py-8 bg-segundo rounded-s">
              <Image
                className="w-2/3 rounded-full self-center"
                src={"/Image/inicio/Mediador.jpg"}
                width={500}
                height={500}
              />
              <h3 className="text-black text-center pt-4">Titulo Ayuda</h3>

              <p className="text-black">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet.
              </p>
            </div>

            <div className="flex flex-col w-1/4 px-8 py-8 bg-segundo rounded-s">
              <Image
                className="w-2/3 rounded-full self-center"
                src={"/Image/inicio/Mediador.jpg"}
                width={500}
                height={500}
              />
              <h3 className="text-black text-center pt-4">Titulo Ayuda</h3>

              <p className="text-black">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet.
              </p>
            </div>

            <div className="flex flex-col w-1/4 px-8 py-8 bg-segundo rounded-s">
              <Image
                className="w-2/3 rounded-full self-center"
                src={"/Image/inicio/Mediador.jpg"}
                width={500}
                height={500}
              />
              <h3 className="text-black text-center pt-4">Titulo Ayuda</h3>

              <p className="text-black">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet.
              </p>
            </div>

            <div className="flex flex-col w-1/4 px-8 py-8 bg-segundo rounded-s">
              <Image
                className="w-2/3 rounded-full self-center"
                src={"/Image/inicio/Mediador.jpg"}
                width={500}
                height={500}
              />
              <h3 className="text-black text-center pt-4">Titulo Ayuda</h3>

              <p className="text-black">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet.
              </p>
            </div>
          </div>
        </section>

        <section className="h-auto">
          <h1 className="text-center text-black">Conoce a nuestro equipo</h1>
          <p>aaaa</p>
        </section>

        <section className="">
          <div className="mx-auto py-12 bg-white shadow-md px-48">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Contáctanos
            </h2>
            <form className="flex flex-col md:flex-row items-center">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium
                                text-gray-700 md:mr-4"
              >
                Correo electronico
              </label>
              <input
                type="text"
                id="mensaje"
                name="mensaje"
                className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200
                                focus:border-blue-400 md:flex-grow text-black"
                placeholder="Escriba su correo electronico"
              />
              <button
                type="submit"
                className="mt-3 md:mt-0 md:ml-4 px-4 py-2 bg-blue-500 text-white rounded-md
                                hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
