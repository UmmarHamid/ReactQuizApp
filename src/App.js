import './App.css';
import Reducer from './Reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Settings from "./Components/Settings"

const store = createStore(Reducer);
function App() {
  return (
    <div className="App">
      <header>
        <h1>Quiz App</h1>
      </header>
      <Settings />
      
    </div>
  );
}

export default App;
