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
                            <strong>Bitcoin Explorer</strong>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button
                            type="button"
                            className="link-button" 
                            onClick={() => this.showComponent('bestRate')}>
                            <strong>The Exchange Rate Path Problem</strong>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button
                            type="button"
                            className="link-button" 
                            onClick={() => this.showComponent('blocktricity')}>
                            <strong>Blocktricity</strong>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button
                            type="button"
                            className="link-button" 
                            onClick={() => this.showComponent('ERC20')}>
                            <strong>ERC20 Token</strong>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button
                            type="button"
                            className="link-button" 
                            onClick={() => this.showComponent('POE')}>
                            <strong>Proof of Existance</strong>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuPortfolio;