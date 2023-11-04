import logo from './logo.svg';
import './App.css';

// Our own components imports
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent/>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
