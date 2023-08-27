import "../app/globals.css"
import Carrusel from "./components/carrusel"
import Navbar from "./components/navbar"
import Footbar from "./components/footbar"
import CardInfo from "./components/cardinfo"
import MiComponente from "./components/Prueba"

const images = [
    '/Image/inicio/Abogados1.jpg',
    '/Image/inicio/Abogados1.jpg',
    // ...agrega más imágenes según sea necesario
];

export default function Home() {
    return (
        <main className="grid grid-flow-row auto-rows-max">
            <Navbar />


            <div className="grid grid-flow-row auto-rows-max hover:auto-rows-min">

                <div className="flex bg-orange-500">
                    <div className=" flex-auto w-70 bg-blue-500 h-auto">
                        <Carrusel images={images} />

                    </div>
                    <div className=" flex-auto w-auto">
                        hola
                        <MiComponente />


                    </div>
                </div>



                <div className="bg-zinc-600 w-auto px-24 pb-14">
                    <h1 className="grid justify-items-center my-8 text-2xl">Titulo</h1>
                    <div className="grid grid-cols-3  gap-10 justify-center">
                        <CardInfo className="bg-blue-500 w-full" />

                        <CardInfo className="bg-blue-500 w-full" />

                        <CardInfo className="bg-blue-500 w-full" />
                    </div>
                </div>

             

                <div className="bg-gray-500">
                    <div className="mx-auto py-12 bg-white shadow-md px-48">
                        <h2 className="text-2xl font-semibold mb-4 text-black">Contáctanos</h2>
                        <form className="flex flex-col md:flex-row items-center">
                            <label htmlFor="mensaje" className="block text-sm font-medium
                                text-gray-700 md:mr-4">
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
                </div>


            </div>

            <Footbar />

        </main>
    );
}
