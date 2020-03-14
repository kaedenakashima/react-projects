import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Toggle from './ToggleRenderProps';
import { Modal, Portal, Toggle } from './Utilities';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Toggle>
        {({ on, toggle }) => (
          <>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>Still what's up this is Katie</h1>
            </Modal>
          </>
        )}
      </Toggle>
    </div>
  );
}

export default App;
