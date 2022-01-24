import './App.css';
import FruitList from './components/fruit-list/fruit-list';
import Person from './components/person/person';
import SchoolMemberList from './components/school-member-list/school-member-list';

function App() {

  const people = [
    { id: 1, firstname: 'Balthazar', lastname: 'Picsou', status: 'Prof'},
    { id: 2, firstname: 'Riri', lastname: 'Duck', status: 'Eleve'},
    { id: 3, firstname: 'Donald', lastname: 'Duck', status: 'Prof'},
    { id: 4, firstname: 'Lili', lastname: 'Duck', status: 'Eleve'},
    { id: 5, firstname: 'Zaza', lastname: 'Vanderquack', status: 'Eleve'},
    { id: 6, firstname: 'Gontran', lastname: 'Bonheur', status: 'Prof'},
    { id: 7, firstname: 'Fifi', lastname: 'Duck', status: 'Eleve'}
  ];

  return (
    <div className="App">
      <h1>Demo 02</h1>

      <Person firstname='Zaza' lastname='Vanderquack' gender='F' />
      <Person firstname='Donald' lastname='Duck' gender='M' />

      <hr />
      <FruitList />

      <hr/>
      <SchoolMemberList members={people} />
    </div>
  );
}

export default App;
