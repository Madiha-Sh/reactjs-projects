import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list';
import data from './components/data';

function App() {

  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      <main>
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people}/>
          <button className='button' onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    </div>
  );
}

export default App;
