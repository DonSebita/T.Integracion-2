import React from "react";
import Image from "next/image";

const Especifico = (props) => {
  return (
    <div className="flex flex-col w-2/5 sm:w-1/2 md:w-1/3 
      lg:w-1/4 xl:w-2/6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 mb-4 sm:mb-6 shadow-md focus:border-2 border-black">
      <Image
        className="w-2/3  sm:w-2/3 md:w-1/2 rounded-full self-center mx-auto"
        src={"/Image/inicio/Mediador.jpg"}
        width={500}
        height={500}
        alt="Imagen de Ayuda"
      />
      <h3 className="font-bold text-black text-center pt-2 sm:pt-4 text-lg sm:text-xl">
        Titulo Ayuda
      </h3>
      <p className="text-black text-sm sm:text-base text-center">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet.
      </p>
    </div>
  );
};

export default Especifico;
