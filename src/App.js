import React, { Component } from 'react';
import BitcoinExplorer from './Components/BitcoinExplorer/BitcoinExplorer';
import BestRate from './Components/BestRate/BestRate'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import HeaderPortfolio from './Components/Header/HeaderPortfolio';



library.add(faSearch)

class App extends Component {

  constructor() {
    super();
    this.state = {
      displayBitcoinExplorer: false,
      displayERC20Token: false,
      displayBestRate: false,
      displayPOE:false
    }
    this.handleShowComponent = this.handleShowComponent.bind(this);
  }

  handleShowComponent = (comp) => {
    if(comp === 'btc'){
      this.setState({
        displayBitcoinExplorer: true,
        displayERC20Token: false,
        displayBestRate: false,
        displayPOE:false
      })

    } else if(comp === 'bestRate'){
      this.setState({
        displayBitcoinExplorer: false,
        displayBestRate: true,
        displayERC20Token: false,
        displayPOE:false
      })
    } else if(comp === 'ERC20'){
      this.setState({
        displayBitcoinExplorer: false,
        displayBestRate: false,
        displayERC20Token: true,
        displayPOE:false
      })
    } else if(comp === 'POE'){
      this.setState({
        displayBitcoinExplorer: false,
        displayBestRate: false,
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
         {/* {this.state.displayERC20Token ? <HeaderPortfolio /> : null}
         {this.state.displayPOE ? <HeaderPortfolio /> : null} */}
        
     
      </div>
    );
  }
}

export default App;
