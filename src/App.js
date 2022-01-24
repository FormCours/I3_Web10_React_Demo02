import './App.css';
import Person from './components/person/person';

function App() {
  return (
    <div className="App">
      <h2>Demo 02</h2>

      <Person firstname='Zaza' lastname='Vanderquack' gender='F' />
      <Person firstname='Donald' lastname='Duck' gender='M' />

    </div>
  );
}

export default App;
