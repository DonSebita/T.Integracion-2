import Image from 'next/image'

export default function Locales() {
	return (	
		
			<div >
				<div >
					<Image
					src="/pitru.jpeg"
					width={500}
	              	height={700}
	              	alt="localPitru"
					/>				
				</div>

				<div >
					<Image
					src="/tolten.jpeg"
					width={500}
		            height={700}
		            alt="localTolten"
					/>				
				</div>

				<div >
					<Image
					src="/loncoche.jpeg"
					width={500}
	              	height={700}
	              	alt="localLonconche"
					/>				
				</div>
			</div>
		
	)
}