import './App.css';
import FruitList from './components/fruit-list/fruit-list';
import Person from './components/person/person';

function App() {
  return (
    <div className="App">
      <h1>Demo 02</h1>

      <FruitList />

      <hr/>
      
      <Person firstname='Zaza' lastname='Vanderquack' gender='F' />
      <Person firstname='Donald' lastname='Duck' gender='M' />

    </div>
  );
}

export default App;
