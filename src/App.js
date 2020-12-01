import React from 'react';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MemeGenerator from './MemeGenerator';
import './App.css';

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MemeGenerator />
      </Provider>
    </div>
  );
}

export default App;
