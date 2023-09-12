import Image from "next/image";
import Link from "next/link"
import "./globals.css";

export default function HomePage() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a href="">
            <img class="w-auto h-10 mx-5" src="/logo.png" alt="" />
          </a>
          <span class="font-semibold text-xl tracking-tight" src="/logo.png">Abogados</span>
        </div>

        <div
          id="menu"
          class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <a
              href=""
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Inicio
            </a>
            <a
              href="/Locales"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Locales
            </a>
            <a
              href=""
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Quienes Somos
            </a>
            <a
              href="/Contacto"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
      <section class="bg-gray-100 ">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">Quienes somos</h1>
            <p class="max-w-2xl mb-6 font-light text-sky-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black">Somos un equipo de abogados especializados en diversas áreas del
              derecho, comprometidos en ofrecer soluciones jurídicas efectivas a
              nuestros clientes. Con una amplia experiencia en litigios y
              asesoramiento legal, brindamos un servicio personalizado y de
              calidad, adaptándonos a las necesidades de cada caso.</p>
            <button href="#" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Ver Mas
            </button>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
            <Image
              src="/img-pag-principal.png"
              width={500}
              height={400}
              alt="imagenPrincipal"
            />
          </div>
        </div>
      </section>

      <footer class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
          <div class="flex flex-col items-center text-center">
            <a href="">
              <img class="w-auto h-11" src="/logo.png" alt="" />
            </a>

            <div class="flex flex-wrap justify-center mt-6 -mx-4">
              <a href="inicio" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" > Inicio </a>

              <a href="/Locales" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" > Locales </a>

              <a href="Quienes somos" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" > Quienes Somos </a>

              <a href="/Contacto" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" > Contacto </a>

            </div>

          </div>

          <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500 dark:text-gray-300">© Copyright 2023. Todos los derechos reservados.</p>

            <div class="flex -mx-2">

              <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
