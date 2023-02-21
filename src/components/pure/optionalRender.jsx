import React, {useState} from 'react';

const LoginButton = ({loginAction}) => {
    return (
        <button style={loggedStyle}  onClick={ loginAction }>Login</button>
    )
}

const LogoutButton = ({logoutAction}) => {
    return (
        <button style={unloggedStyle}  onClick={ logoutAction }>Logout</button>
    )
}

let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
};

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}


const OptionalRender = () => {

    const [access, setAccess] = useState(true)
    const [nMessage, setnMessage] = useState(0);

    //const updateAccess = () => {
    //    setAccess(!access);
    //}

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    if(access) {
        optionalButton = <LogoutButton logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton loginAction={loginAction}></LoginButton>
    }

    let addMessages = () => {
        setnMessage(nMessage + 1);
    }


    return (
        <div>
        {access ? (
            <div>
                { optionalButton }
                { nMessage > 0 && nMessage === 1 && <p>You have { nMessage } new message...</p>}
                { nMessage > 1 && <p>You have { nMessage } new messages..</p> }
                { nMessage === 0 && <p>there are not new messages</p>}
            <button onClick={addMessages}>Add new Message</button>

            </div>
        ): null}
            
        </div>
    );
}

export default OptionalRender;
