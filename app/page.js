import Image from'next/image'
import Link from 'next/link';

export default function HomePage() {
  return (
    
      <div >
        <div >
          <div>
            <h2>¿Quienes somos?</h2>
            <p>
              Somos un equipo de abogados especializados en diversas áreas del derecho,
              comprometidos en ofrecer soluciones jurídicas efectivas a nuestros clientes.
              Con una amplia experiencia en litigios y asesoramiento legal, brindamos un servicio personalizado y de calidad,
              adaptándonos a las necesidades de cada caso.
            </p>
            <Link href="/principal/contacto">
              <button>Pedir Asesoramiento</button>
            </Link>
            <Link href="principal/locales">
              <button>Locales</button>
            </Link>
          </div>
          <div >
            <Image
              src="/img-pag-principal.png"
              width={500}
              height={400} 
              alt="imagenPrincipal"
            />
          </div>
        </div>
      </div>
    
  )
}
