import React from "react";

const CardInfo = (props) => {
  return (
    <div className={props.className + " flex flex-col p-9"}>
      <div className="w-16 h-auto sm:w-16 md:w-16 lg:w-16 xl:w-24 text-blue-700 self-center">
        {props.svg}
      </div>
      <h1 className="pt-4 text-xl text-center sm:text-xl md:text-2xl lg:text-4xl xl:text-2xl font-bold">
        {props.Titulo}
      </h1>
      <span className="text-left pt-3 text-base sm:text-sm md:text-lg lg:text-lg xl:text-xl">
        {props.Descripcion}
      </span>
    </div>
  );
};

export default CardInfo;
