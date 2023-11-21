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
  const { data: session } = useSession();
  const { status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-teal-500">
      <div className="flex items-center justify-between py-3 pr-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
          <Image
            src="/../public/logo.png"
            width={50}
            height={50}
            alt="logo principal  nadvar"
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
              {menuOpen
                ? <path d="M6 18L18 6M6 6l12 12"></path>
                : <path d="M4 6h16M4 12h16m-7 6h7"></path>}
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

              {status === "authenticated"
                ? (
                  <button
                    className="text-white block mt-4 hover:text-gray-200"
                    onClick={() => {
                      signOut();
                      setMenuOpen(false);
                    }}
                  >
                    Cerrar sesión
                  </button>
                )
                : (
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

          {status === "authenticated"
            ? (
              <div className="group inline-block relative w-auto bg-teal-300 h-full px-3 py-2">
                <button className="relative focus:outline-none rounded-sm flex flex-col items-center min-w-32">
                  <Image
                    className="w-16 rounded-full"
                    width={500}
                    height={500}
                    src={`/Image/users/${session?.user?.nombre}_${session?.user?.apellido}.jpeg`}
                    alt="user photo"
                    autoFocus
                  />
                  <span className="pr-1 font-semibold flex-1">
                    {session?.user?.nombre} {session?.user?.apellido}
                  </span>
                </button>
                <ul className="bg-teal-500 border border-teal-700 rounded-sm transform scale-0 group-hover:scale-100 absolute
  transition duration-150 ease-in-out origin-top min-w-32 z-50 mt-2">
                  <li className="rounded-sm px-3 py-1 border-b border-gray-300 hover:bg-teal-600">
                    <Link href={"/user/perfil"}>Perfil</Link>
                  </li>
                  <li className="rounded-sm px-3 py-1 border-b border-gray-300 hover:bg-teal-600">
                    <Link href={"/paginaAbogados"}>Eventos</Link>
                  </li>
                  <li className="rounded-sm px-3 py-1 hover:bg-teal-600">
                    <button
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Cerrar sesion
                    </button>
                  </li>
                </ul>
              </div>
            )
            : (
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
