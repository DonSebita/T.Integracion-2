import React from 'react';
import Link from 'next/link';

const Navbar = (props) => {
    return (
        <nav className={props.className + " h-min bg-cuarto"}>
            <h1 className="text-black">NAVBAR</h1> 
        </nav>
    );
}

export default Navbar;
