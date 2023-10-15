"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const links = [{
  label: "Inicio",
  ruta: "/",
}, {
  label: "Locales",
  ruta: "/principal/local",
}, {
  label: "Contactanos",
  ruta: "/principal/contacto",
}];

const Navbar = () => {
  const { status } = useSession();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <Image
            src="/../public/logo.png"
            width={50}
            height={50}
            alt="logo principal"
            className="w-auto h-10 mx-5"
          />
        </Link>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        {links.map(({ label, ruta }, index) => (
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            href={ruta}
            key={index}
          >
            {label}
          </Link>
        ))}
      </div>

      {status === "authenticated"
        ? (
          <div>
            <button
              className="bg-teal-900 text-white py-2 px-4
          rounded-md hover:bg-teal-800 focus:outline-none
          focus:ring focus:ring-teal-300"
              onClick={() => signOut()}
            >
              Cerrar sesion
            </button>
          </div>
        )
        : (
          <div>
            <button
              className="bg-teal-900 text-white py-2 px-4
          rounded-md hover:bg-teal-800 focus:outline-none
          focus:ring focus:ring-teal-300"
              onClick={() => signIn()}
            >
              Iniciar Sesion
            </button>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
