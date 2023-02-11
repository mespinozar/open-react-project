/**Ejemplo de Hook useState */

import React, { useState } from 'react';

const Ejemplo1 = () => {
    //Valor inicial contador
    const valorInit = 0;

    //Valor inicial persona
    const personaInit = {
        name: 'Peter',
        email: 'peter@gmail.com',
    }

    //Queremos que el valor init y personainit sean parte del estado del componente para gestionar su cambio en la vista del componente
    const [contador, setContador] = useState(valorInit);
    const [persona, setPersona] = useState(personaInit);

    //funcion que actualiza estado privado del contador
    function incrementContador() {
        setContador(contador +1);

    }

    function actualizarPersona() {
        setPersona(
            {
                name: 'Saai',
                email: 'sarai@gmail.com'
            }
        );
    }

    return (
        <div>
            <h1>Ejemplo useState</h1>
            <h2>CONTADOR: { contador }</h2>
            <h2> DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: { persona.name }</h3>
            <h4>EMAIL: { persona.email }</h4>
            <button onClick={incrementContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
