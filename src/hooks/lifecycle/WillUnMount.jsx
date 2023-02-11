
import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Antes  de que desaparezca el componente')
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnMount
                </h1>
            </div>
        );
    }
}



export const WillUnMountHook = () => {

    useEffect(() => {
      
    
      return () => {
        console.log('Antes de que desaparezca el componente')
      }
    }, [])
    

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}





