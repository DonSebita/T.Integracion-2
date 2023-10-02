import React from "react";

const CardInfo = (props) => {
  return (
    <div className={props.className + " flex flex-col p-9"}>
      <svg
        className="w-16 h-auto sm:w-16 md:w-16 lg:w-16 xl:w-24 text-red-500 self-center"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M719.8 651.8m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
          fill="#E73B37"
        />
        <path
          d="M512.1 64H172v896h680V385.6L512.1 64z m278.8 324.3h-280v-265l280 265zM808 916H216V108h278.6l0.2 0.2v296.2h312.9l0.2 0.2V916z"
          fill="#39393A"
        />
        <path d="M280.5 530h325.9v16H280.5z" fill="#39393A" />
        <path d="M639.5 530h90.2v16h-90.2z" fill="#E73B37" />
        <path d="M403.5 641.8h277v16h-277z" fill="#39393A" />
        <path d="M280.6 641.8h91.2v16h-91.2z" fill="#E73B37" />
        <path d="M279.9 753.7h326.5v16H279.9z" fill="#39393A" />
        <path d="M655.8 753.7h73.9v16h-73.9z" fill="#E73B37" />
      </svg>
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
