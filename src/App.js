import logo from './logo.svg';
import './App.css';

import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GreetingStyled name="Pepo"/>
        </p>
      </header>
    </div>
  );
}

export default App;

