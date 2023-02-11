import logo from './logo.svg';
import './App.css';

import Ejemplo4 from './hooks/ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Ejemplo4 nombre="Carol"/>
          <h3>
            Contenido del props.Children 
          </h3>
        </p>
      </header>
    </div>
  );
}

export default App;

