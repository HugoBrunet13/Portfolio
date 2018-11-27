import React, { Component } from 'react';
import BitcoinExplorer from './Components/BitcoinExplorer/BitcoinExplorer';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class App extends Component {
  render() {
    return (
      <div>
        <BitcoinExplorer />
      </div>
    );
  }
}

export default App;
