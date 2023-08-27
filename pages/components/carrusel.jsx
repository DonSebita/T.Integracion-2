import React, { useState } from 'react';

import Image from 'next/image';

const Carrusel = (props) => {

    const [mensaje, setMensaje] = useState(0);
    const [imagen, setImagen] = useState(0);

    const ListaImg = [
        "/Image/inicio/Abogados1.jpg",
        "/Image/inicio/Abogados2.jpg",
    ];
    //<Image src={ListaImg[0]} width={500} height={500} alt="Imagen del carrusel" class="w-64 h-64 object-contain"/>

    const texto = [
        {
            titulo: "Titulo 1",
            descripcion: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint  1",
        },
        {
            titulo: "Titulo 2",
            descripcion: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint  2",
        }
    ]

    return (
        <div class="flex items-center justify-center w-auto relative my-10">
            <div class="mx-4 relative">
                <Image src={ListaImg[imagen]} width={1000} height={500} alt="Imagen del carrusel" class="object-contain" />
                <div class="absolute bottom-0 left-0 right-0 py-10 px-5 bg-black bg-opacity-50 text-white">
                    <h1 className='text-xl font-bold mb-3'>{texto[imagen].titulo}</h1>
                    {texto[imagen].descripcion}
                </div>
                <div class="absolute inset-0 flex justify-between">
                    <button class="p-2 text-black opacity-100 text-6xl hover:text-white hover:bg-black hover:bg-opacity-50 mb-36" onClick={() => setImagen(imagen - 1)}>
                        &lt;
                    </button>
                    <button class="p-2 text-black opacity-50 text-6xl" onClick={() => setImagen(imagen + 1)}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carrusel;
