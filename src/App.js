import React, { Component } from 'react';
import HeaderPortfolio from './Components/Header/HeaderPortfolio';
import BitcoinExplorer from './Components/BitcoinExplorer/BitcoinExplorer';
import BestRate from './Components/BestRate/BestRate'
import ERC20Token from './Components/ERC20Token/ERC20Token';
import POE from './Components/POE/POE';
import Blocktricity from './Components/Blocktricity/Blocktricity'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'




library.add(faSearch)

class App extends Component {

  constructor() {
    super();
    this.state = {
      displayBitcoinExplorer: false,
      displayBestRate: false,
      displayBlocktricity: false,
      displayERC20Token: false,
      displayPOE:false
    }
    this.handleShowComponent = this.handleShowComponent.bind(this);
  }

  handleShowComponent = (comp) => {
    if(comp === 'btc'){
      this.setState({
        displayBitcoinExplorer: true,
        displayERC20Token: false,
        displayBlocktricity: false,
        displayBestRate: false,
        displayPOE:false
      })
    } else if(comp === 'bestRate'){
      this.setState({
        displayBitcoinExplorer: false,
        displayBestRate: true,
        displayBlocktricity: false,
        displayERC20Token: false,
        displayPOE:false
      })
    } else if(comp === 'blocktricity'){
      this.setState({
        displayBitcoinExplorer: false,
        displayBestRate: false,
        displayBlocktricity: true,
        displayERC20Token: false,
        displayPOE:false
      })
    }else if(comp === 'ERC20'){
      this.setState({
        displayBitcoinExplorer: false,
        displayBestRate: false,
        displayBlocktricity: false,
        displayERC20Token: true,
        displayPOE:false
      })
    } else if(comp === 'POE'){
      this.setState({
        displayBitcoinExplorer: false,
        displayBestRate: false,
        displayBlocktricity: false,
        displayERC20Token: false,
        displayPOE:true
      })
    }
  }

  render() {
    return (
      <div>
          <HeaderPortfolio showComponent={this.handleShowComponent}/>
         {this.state.displayBitcoinExplorer ? <BitcoinExplorer /> : null}
         {this.state.displayBestRate ? <BestRate /> : null}
         {this.state.displayBlocktricity ? <Blocktricity /> : null}
         {this.state.displayERC20Token ? <ERC20Token /> : null}
         {this.state.displayPOE ? <POE /> : null} 
        
     
      </div>
    );
  }
}

export default App;
