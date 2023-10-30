"use client";
import Image from "next/image";

const Navbar2 = () => {
  return (
    <div class="group inline-block">
      <button class="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex flex-col items-center min-w-32">
        <Image
          className="w-12 h-12 rounded-full"
          width={500}
          height={500}
          src={"/Image/users/Christian.jpeg"}
          alt="user photo"
        />
        <span class="pr-1 font-semibold flex-1">Christian Verdugo</span>
      </button>
      <ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32">
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Perfil</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Eventos</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Cerrar session</li>
      </ul>
    </div>
  );
};

export default Navbar2;
