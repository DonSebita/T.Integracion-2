import Image from "next/image";

const Perfil = async () => {
  return (
    <main>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center">
          Perfil de usuario
        </h2>
        <div className="relative font-sans w-full flex flex-row justify-center py-36">
          <div className="card w-full bg-white  shadow-xl hover:shadow">
            <Image
              className="w-64 mx-auto rounded-full -mt-32 border-8 border-white"
              width={500}
              height={500}
              src="/Image/users/Christian_Verdugo.jpeg"
              alt=""
            />
            <div className="absolute -mt-32 right-0">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 m-3 hover:text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </button>
            </div>
            <div className="flex p-4 border-t border-gray-300 mx-3">
              <div className="w-1/2 text-center">
                <span className="font-bold">Nombre</span>
                <br />
                Christian
              </div>
              <div className="w-0 border border-gray-300">
              </div>
              <div className="w-1/2 text-center">
                <span className="font-bold">Apellido</span>
                <br />
                Verdugo
              </div>
            </div>
            <div className="flex p-4 border-t border-gray-300 mx-3">
              <div className="w-1/2 text-center">
                <span className="font-bold">Rut</span>
                <br />
                20.708.854-4
              </div>
              <div className="w-0 border border-gray-300">
              </div>
              <div className="w-1/2 text-center">
                <span className="font-bold">Correo</span>
                <br />
                crischandel@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center">
          Perfil de usuario
        </h2>
        <div className="relative font-sans w-full flex flex-row justify-center py-36">
          <div className="card w-full bg-white  shadow-xl hover:shadow">
            <div className="relative flex justify-center">
              <Image
                className="w-64 mx-auto rounded-full -mt-32 border-8 border-white"
                width={500}
                height={500}
                src="/Image/users/Christian_Verdugo.jpeg"
                alt=""
              />

              <button className="absolute w-64 h-64 rounded-full -mt-32 opacity-0 hover:opacity-70 bg-white text-black
                transition duration-1000 ease-in-out">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-1/5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
                <p className="font-bold">Cambiar Foto</p>
              </button>
            </div>

            <div className="absolute -mt-32 right-0">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 m-3 hover:text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </button>
            </div>
            <div className="flex p-4 border-t border-gray-300 mx-3">
              <div className="w-1/2 text-center">
                <label htmlFor="nombre" className="font-bold">Nombre</label>
                <br />
                <input
                  id="nombre"
                  name="nombre"
                  className="focus:outline-none focus:border-blue-600 hover:border-blue-400 transition duration-500 ease-in-out border-b-2 border-gray-300 text-center"
                  value={"Christian"}
                />
              </div>
              <div className="w-0 border border-gray-300">
              </div>
              <div className="w-1/2 text-center">
                <label htmlFor="apellido" className="font-bold">Apellido</label>
                <br />
                <input
                  id="apellido"
                  name="apellido"
                  className="w-auto border-b border-blue-400 focus:border-gray-300 text-center "
                  value={"Verdugo"}
                />
              </div>
            </div>
            <div className="flex p-4 border-t border-gray-300 mx-3">
              <div className="w-1/2 text-center">
                <label htmlFor="rut" className="font-bold">Rut</label>
                <br />
                <input
                  id="rut"
                  name="rut"
                  className="w-auto border-b border-blue-400 focus:border-gray-300 text-center "
                  value={"20.708.544-4"}
                />
              </div>
              <div className="w-0 border border-gray-300">
              </div>
              <div className="w-1/2 text-center">
                <label htmlFor="correo" className="font-bold">Correo</label>
                <br />
                <input
                  id="correo"
                  name="correo"
                  className="w-auto border-b border-blue-400 focus:border-gray-300 text-center "
                  value={"crischandel@gmail.com"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Perfil;
