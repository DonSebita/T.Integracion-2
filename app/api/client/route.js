import conexionBD from '@/lib/cxDB'
import Client from '@/models/Client'


export default async function handler(req, res) {
  
  await conexionBD()

  const {method} = req 
  switch(method){

    case 'POST':
      try{

        const cliente = new Client(req.body)
        await cliente.save()
        return res.status(200).json({succes: true,cliente})

      }catch(error){
        return res.status(400).json({succes: false,error})
      }
    default: return res.status(500).json({succes: false, error:"Error al enviar"})
  }
}
