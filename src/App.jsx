import React from 'react'
import './App.css';
import {Balance,Header,History,Summary,AddTransaction} from './components/index'



function App() {
  return (
    <div className="App">
      <Header/>
      <Balance/>
      <Summary/>
     <History/>
     <AddTransaction/>
    </div>
  );
}

export default App;
