import "../app/globals.css"

import Image from "next/image"
import Carrusel from "./components/carrusel"
import Navbar from "./components/navbar"
import Footbar from "./components/footbar"

const Lugares = [
    {
        direccion: "",
        ciudad: "",
        maps: "",
        horario: ""
    },
    {
        direccion: "",
        ciudad: "",
        maps: "",
    }

]

export default function Localidades() {
    return (
        <main className="grid grid-flow-row auto-rows-max">
            <Navbar />



            <div className="h-screen w-full bg-slate-400">
                <h1 className="text-black text-center">Localidades</h1>


                <div className="grid grid-cols-3 gap-x-10 px-32">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                        <h2 className="text-xl font-semibold text-gray-800 pl-5 pt-5"> Ciudad{""}</h2>
                        <Image width={500} height={500}
                            className="w-full h-50 object-cover px-5"
                            src={"/Image/locales/TiendaAbogado1.jpg"}
                            alt="Ubicación" />
                        <div className="py-4 px-6">
                            <h2 className="text-xl font-semibold text-gray-800">Horarios:</h2>

                            <a href={"https://goo.gl/maps/p9puUW3C6wK5zR5i6"} target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline">
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                        <h2 className="text-xl font-semibold text-gray-800 pl-5 pt-5"> Ciudad{""}</h2>
                        <Image width={500} height={500}
                            className="w-full h-50 object-cover px-5"
                            src={"/Image/locales/TiendaAbogado1.jpg"}
                            alt="Ubicación" />
                        <div className="py-4 px-6">
                            <h2 className="text-xl font-semibold text-gray-800">Horarios:</h2>

                            <a href={"https://goo.gl/maps/p9puUW3C6wK5zR5i6"} target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline">
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>

                                        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                        <h2 className="text-xl font-semibold text-gray-800 pl-5 pt-5"> Ciudad{""}</h2>
                        <Image width={500} height={500}
                            className="w-full h-50 object-cover px-5"
                            src={"/Image/locales/TiendaAbogado1.jpg"}
                            alt="Ubicación" />
                        <div className="py-4 px-6">
                            <h2 className="text-xl font-semibold text-gray-800">Horarios:</h2>

                            <a href={"https://goo.gl/maps/p9puUW3C6wK5zR5i6"} target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline">
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>

                                        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                        <h2 className="text-xl font-semibold text-gray-800 pl-5 pt-5"> Ciudad{""}</h2>
                        <Image width={500} height={500}
                            className="w-full h-50 object-cover px-5"
                            src={"/Image/locales/TiendaAbogado1.jpg"}
                            alt="Ubicación" />
                        <div className="py-4 px-6">
                            <h2 className="text-xl font-semibold text-gray-800">Horarios:</h2>

                            <a href={"https://goo.gl/maps/p9puUW3C6wK5zR5i6"} target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline">
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>

                </div>





            </div>





            <Footbar />
        </main>

    )
}
