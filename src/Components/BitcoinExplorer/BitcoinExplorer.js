import React, { Component } from 'react';
import BlockInfo from './information/BlockInfo';
import TransactionInfo from './information/TransactionInfo';
import AddressInfo from './information/AddressInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BitcoinExplorer.css'

class BitcoinExplorer extends Component {

    constructor() {
        super();
        this.state = {
            inputBlock:'',
            inputTx:'',
            inputAddress:'',
            blockId: '',
            hashTx: '',
            address: '',
            displayBlockInfo: false,
            buttonBlockCLicked:false,
            displayTransactionInfo: false,
            displayAddressInfo: false
        }
    }

    onChangeBlock(event){
        this.setState({
            inputBlock: event.target.value,
            inputTx: '',
            inputAddress: '',
            buttonBlockCLicked:false
        });
    }

    onChangeTx(event){
        this.setState({
            inputBlock: '',
            inputTx: event.target.value,
            inputAddress: '',
            displayTransactionInfo: false
        });
    }

    onChangeAddress(event){
        this.setState({
            inputBlock: '',
            inputTx: '',
            inputAddress: event.target.value,
            displayAddressInfo: false
        });
    }

    searchBlock(){
        if(this.state.inputBlock){
            this.setState({
                blockId: this.state.inputBlock,
                buttonBlockCLicked:true,
                displayBlockInfo: true,
                displayTransactionInfo: false,
                displayAddressInfo: false
            });  
        }
    }

    searchTx(){
        if(this.state.inputTx){
            this.setState({
                hashTx: this.state.inputTx,
                displayBlockInfo: false,
                displayTransactionInfo: true,
                displayAddressInfo: false
            });  
        }  
    }

    searchAddress(){
        if(this.state.inputAddress){
            this.setState({
                address:this.state.inputAddress,
                displayBlockInfo: false,
                displayTransactionInfo: false,
                displayAddressInfo: true
            });  
        }  
    }


    render() {
        return(
            <div>
                <div> 
                    <h1>Bitoin explorer</h1>
                                    
                    <div className="row justify-content-md-center">
                        <div className="input-group col-md-6">
                            <input 
                                className="form-control py-2 border-right-0 border" 
                                type="search" 
                                placeholder="Block number"
                                value={this.state.inputBlock} 
                                onChange={this.onChangeBlock.bind(this)}
                            />
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary border-left-0 border" onClick={this.searchBlock.bind(this)}>
                                    <FontAwesomeIcon icon="search" />
                                </button>
                            </span>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="input-group col-md-6">
                            <input 
                                className="form-control py-2 border-right-0 border" 
                                type="search" 
                                placeholder="Hash transaction"
                                value={this.state.inputTx} 
                                onChange={this.onChangeTx.bind(this)}
                            />
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary border-left-0 border" type="button" onClick={this.searchTx.bind(this)}>
                                    <FontAwesomeIcon icon="search" />
                                </button>
                            </span>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="input-group col-md-6">
                            <input 
                                className="form-control py-2 border-right-0 border" 
                                type="search" 
                                placeholder="Address"
                                value={this.state.inputAddress} 
                                onChange={this.onChangeAddress.bind(this)}
                            />
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary border-left-0 border" type="button" onClick={this.searchAddress.bind(this)}>
                                    <FontAwesomeIcon icon="search" />
                                </button>
                            </span>
                        </div>
                    </div>
                    
                 </div>
                
                    {this.  this.state.buttonBlockCLicked ? <BlockInfo blockId={this.state.blockId}/> : null}
                    {this.state.displayTransactionInfo ? <TransactionInfo hashTx={this.state.hashTx}/> : null}
                    {this.state.displayAddressInfo ? <AddressInfo address={this.state.address}/> : null}
            </div>
        );  
    }
}

export default BitcoinExplorer;