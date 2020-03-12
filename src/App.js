import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Toggle from './ToggleRenderProps';
import Toggle from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

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
      <Modal>
        <h1>Still in modal</h1>
      </Modal>
      <Toggle>
        {({ on, toggle }) => (
          <>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show / Hide</button>
            <Portal>{on && <h1>Hi. I'm a portal!</h1>}</Portal>
          </>
        )}
      </Toggle>
    </div>
  );
}

export default App;
