"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const links = [
  { label: "Inicio", ruta: "/" },
  { label: "Locales", ruta: "/principal/local" },
  { label: "Contactanos", ruta: "/principal/contacto" },
];

const Navbar = () => {
  const { status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-teal-500 p-6">
      <div className="flex items-center justify-between">
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

        {/* Icono del menú para dispositivos móviles */}
        <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>

          {menuOpen && (
            <div className="mt-4">
              {links.map(({ label, ruta }, index) => (
                <Link
                  className="block mt-2 text-white hover:text-gray-200"
                  href={ruta}
                  key={index}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}

              {status === "authenticated" ? (
                <button
                  className="text-white block mt-4 hover:text-gray-200"
                  onClick={() => {
                    signOut();
                    setMenuOpen(false);
                  }}
                >
                  Cerrar sesión
                </button>
              ) : (
                <button
                  className="text-white block mt-4 hover:text-gray-200"
                  onClick={() => {
                    signIn();
                    setMenuOpen(false);
                  }}
                >
                  Iniciar Sesión
                </button>
              )}
            </div>
          )}
        </div>

        {/* Menú lateral para dispositivos de pantalla grande (no se muestra en dispositivos móviles) */}
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          {links.map(({ label, ruta }, index) => (
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
              href={ruta}
              key={index}
            >
              {label}
            </Link>
          ))}

          {status === "authenticated" ? (
            <button
              className="text-white mt-4 lg:mt-0 ml-4 hover:text-gray-200"
              onClick={() => {
                signOut();
              }}
            >
              Cerrar sesión
            </button>
          ) : (
            <button
              className="text-white mt-4 lg:mt-0 ml-4 hover:text-gray-200"
              onClick={() => {
                signIn();
              }}
            >
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
