import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import IdeasContainer from '../IdeasContainer/IdeasContainer'

function App() {
  return (
    <main className="App">
      <Header />
      <Form />
      <IdeasContainer />
    </main>
  );
}

export default App;
