import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
//import GreetingStyled from './components/pure/greetingStyled';
//import Father from './components/container/Father';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <TaskListComponent/>
        </p>
      </header>
    </div>
  );
}

export default App;

