import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Sidebar />
          <Main />
        </div>
      </HashRouter>
    );
  }
}

export default App;
