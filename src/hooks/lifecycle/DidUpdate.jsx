
import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Cuando recibe nuevos props')
    }


    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}



export const DidUpdateHook = () => {

    useEffect(() => {
       console.log('Recibe nuevos props')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}



