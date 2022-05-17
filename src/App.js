
import './App.css';
import Web2Game from './Components/Web2Game';
import Web2Point5Game from './Components/Web2Point5Game';
import Web3Game from './Components/Web3Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Web2Game welcomeMessage="Hello Player" /> */}
        {/* <Web2Point5Game /> */}
        <Web3Game />
      </header>
    </div>
  );
}

export default App;
