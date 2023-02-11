import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Antes de ser añadido el componente al DOM')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
      console.log('Antes de ser añadido al DOM (renderice)')
    
    }, [])
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

export default DidMount;



