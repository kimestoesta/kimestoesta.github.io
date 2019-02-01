import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import ScrollToTop from './ScrollToTop';
import Main from './components/main/Main';
import { HashRouter } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <div className="App">
            <Sidebar />
            <Main />
          </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
