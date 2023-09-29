import Link from 'next/link'
import Image from'next/image'

const links = [{
    label : 'Inicio',
    ruta: '/'
  },{
    label : 'Locales',
    ruta: '/principal/locales'
  },{
    label : 'Contactanos',
    ruta: '/principal/contacto'
}]

const Navbar = () => {
  return(
    <nav>
      <div>
        <Link href = '/'>
          <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="logo"
              style={{
                objectFit: "cover",
                borderRadius: "50px",
              }}
          />
        </Link>
      </div>


      <div>
          {links.map(({label,ruta})=>(
            <li key={ruta}>
              <Link href={ruta}>{label}</Link>
            </li>
          ))} 
      </div>
    </nav>
  );
};

export default Navbar;