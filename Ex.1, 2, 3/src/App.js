// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import Header from '../src/components/Header';
import PostImage from '../src/components/PostImage';
import Box from '../src/components/Box';
import Counter from './components/Counter';

import PostData from './components/postContentdata';
import LessText from './components/LessText';

function App() {

  return (
    <div className='container-fluid'>
      <div className='row col'>
        <Header
          title='ReactJS Learning'
        />
      </div>
      <div className='row'>
        <PostImage
          image='me.jpg'
        />
      </div>
      <div className='row'>
        <LessText
          text={`Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.`}
          maxLength={35}
        />
        <LessText
          text={`Winners embrace hard work. They love the disciple of it, the trade-off they're making to win. Losers, on the other hand, see it as punishment. And that's the difference. `}
          maxLength={35}
        />
      </div>
      <div className='row'>
        <Counter />
      </div>
      <div className='row'>
        <PostData />
      </div>
      <div className='row'>
        <Box />
      </div>
    </div>
  );
}


export default App;

