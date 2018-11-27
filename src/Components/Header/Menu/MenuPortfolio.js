import React, { Component } from 'react'
import './MenuPortfolio.css'

class MenuPortfolio extends Component {

    showComponent = (comp) => {
        this.props.showComponent(comp);
    }

    render(){
        return(
            

            <div className="MenuPortfolio">
                <div className="row">
                    <div className="col-sm">
                        <button
                            type="button"
                            className="link-button" 
                            onClick={() => this.showComponent('btc')}>
                            Bitcoin Explorer
                        </button>
                    </div>
                    <div className="col-sm">
                        <button
                            type="button"
                            className="link-button" 
                            onClick={() => this.showComponent('bestRate')}>
                            Best rate
                        </button>
                    </div>
                    <div className="col-sm">
                        <button
                            type="button"
                            className="link-button" 
                            onClick={() => this.showComponent('ERC20')}>
                            ERC20
                        </button>
                    </div>
                    <div className="col-sm">
                        <button
                            type="button"
                            className="link-button" 
                            onClick={() => this.showComponent('POE')}>
                            POE
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuPortfolio;