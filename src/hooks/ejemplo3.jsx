//Ejemplo Hooks de useState , useContext

import React, {useState, useContext} from 'react';

//Componente1 dispone valores desde el padre

const miContexto = React.createContext()

const Componente1 = () => {

    //Inicia con estado vacio
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: { state.token }
            </h1>
            <Componente2/>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesion es : { state.sesion }
            </h2>
        </div>
    );
}


export default function MiComponentConContext() {

    const estadoInicial = {
        token: '123456',
        sesion: 1
    }

    //Crear estado de componente
    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSessionData(
            {
                token: 'KJJHUJU',
                sesion: sessionData.sesion + 1 
            }
        );
    }

  return (
    <miContexto.Provider value={ sessionData }>
        <h1>Ejemplo UseState y useContext</h1>
        <Componente1/>
        <button onClick={ actualizarSesion }>Actualizar Sesion</button>
    </miContexto.Provider>
    
  )
}











