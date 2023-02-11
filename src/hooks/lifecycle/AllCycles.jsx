import React, { useEffect } from 'react'

function AllCycles() {

    useEffect(() => {
      console.log('Componente creado')

      const intervalID = setInterval(() => {
        document.title = `${new Date()}`
        console.log('actualizacion del componente')
      }, 1000);
    
      return () => {
        console.log('Desaparece componente');
        document.title = "Tiempo detenido";
        clearInterval(intervalID);
      }
    }, []);
    


  return (
    <div>

    </div>
  )
}

export default AllCycles;