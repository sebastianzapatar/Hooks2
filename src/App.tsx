import './App.css';
import { CounterReducer2 } from './bases/CounterReducer2';
import { Menu } from './bases/Menu';


function App() {
  return (
    <>
      <h1>Tengo Hambre</h1>
      
      <CounterReducer2/>
      <Menu/>
    </>
  );
}

export default App;
