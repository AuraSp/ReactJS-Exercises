import React from 'react';
import Cake from './components/Cake/Cake';
import TodoList from './components/TodoList/TodoList';
import Fetch from './components/FetchAPI/fetch';
import Learning from './components/FetchJSON/Learning';


function App() {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Learning />
      </div>
      <div className='row'>
        <TodoList />
      </div>
      <div className='row'>
        <Cake />
      </div>
      <div className='row'>
        <Fetch />
      </div>
    </div>
  );
}


export default App;

