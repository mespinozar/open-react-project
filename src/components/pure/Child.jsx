import React, {useRef} from 'react'

const Child = ({name, send, update}) => {

  const messageRef = useRef('')
  const nameRef = useRef('')

  function pressButton() {
    const text = messageRef.current.value;
    alert(`Texto ${text}`);

  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitForm(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }




  return (
    
    <div>
        <p onMouseOver={() => console.log('Mouse Over')}>Hello, {name}</p>
        <button onClick={pressButton}>Boton 1</button>
        <button onClick={pressButtonParams}>Boton 2</button>
        <button onClick={pressButtonParams('Hello')}>Boton 3</button>
        <input placeholder='Insert text' 
               onFocus={() => console.log('Input')}
               ref = {messageRef}
            
        />
        <button onClick={() => send(messageRef.current.value)}>Send Message</button>
        <div style={{marginTop:'20px'}}>
          <form onSubmit={submitForm}>
            <input ref={nameRef} placeholder='New name'/>
            <button type='submit'>Update Name</button>
          </form>


        </div>
    </div>
  )
}

export default Child