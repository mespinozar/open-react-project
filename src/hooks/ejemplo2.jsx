/**Ejemplo de uso de useState, useRef  y useEffect */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Crear 2 contadores distintos en estados diferentes
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Crear referencia con useRef asociar variable con elemento del DOM
    const miRef = useRef(0);

    function increment1(){
        setContador1(contador1 +1);
    }

    function increment2(){
        setContador2(contador2 +1);
    }

    /*Trabajando con useEffect*/
    //Caso1 - Ejecuta siempre snippet de codigo
    //useEffect(() => {
    //    console.log('Cambio estado de component');
    //    console.log('Mostrando referencia de elemento DOM');
    //    console.log(miRef);
    //})

    //Caso2- Ejecuta solo cuando se cambie contador1
    useEffect(() => {
        console.log('Cambio de Contador 1');
        console.log('Mostrando referencia de elemento DOM');
    }, [contador1]); 



    return (
        <div>
            <h1>Ejemplo useState, useRef, useEffect</h1>
            <h2>Contador 1 : { contador1 }</h2>
            <h2>Contador 2 : { contador2 }</h2>
            <h4 ref={ miRef }>
                Elemento referenciado
            </h4>
            <button onClick={ increment1 }>Incremento Contador 1</button>
            <button onClick={ increment2 }>Incremento Contador 2</button>
        </div>
    );
}

export default Ejemplo2;
