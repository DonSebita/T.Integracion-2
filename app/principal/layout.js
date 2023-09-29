import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Head from 'next/head'
export default function RootLayout({children}) {
	return (
		<html lang="en">
	      <body>
	      	<Navbar/>
	        {children}
	      	<Footer/>
	      </body>
	    </html>
	)
}