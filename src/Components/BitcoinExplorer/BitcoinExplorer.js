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
            displayTransactionInfo: false,
            displayAddressInfo: false
        }
        this.handleTxComponentUnmount = this.handleTxComponentUnmount.bind(this);
        this.handleBlockComponentUnmount = this.handleBLockComponentUnmount.bind(this);
        this.handleAddressComponentUnmount = this.handleAddressComponentUnmount.bind(this);
    }

    handleTxComponentUnmount(param) {
        if(typeof param === 'string') {
            this.setState({
                displayTransactionInfo:false,
                displayAddressInfo:true,
                address: param,
                inputTx:''
            })
        } else{
            this.setState({
                displayTransactionInfo:false,
                displayBlockInfo:true,
                blockId: param,
                inputTx:''
            })
        }
    }

    handleBLockComponentUnmount(tx){
        this.setState({
            displayTransactionInfo:true,
            displayBlockInfo:false,
            hashTx: tx
        })
    }

    handleAddressComponentUnmount(tx){
        this.setState({
            displayAddressInfo:false,
            displayTransactionInfo:true,
            hashTx:tx
        })
    }

    onChangeBlock(event){
        this.setState({
            inputBlock: event.target.value,
            inputTx: '',
            inputAddress: '',
        });
    }

    onChangeTx(event){
        this.setState({
            inputBlock: '',
            inputTx: event.target.value,
            inputAddress: '',
        });
    }

    onChangeAddress(event){
        this.setState({
            inputBlock: '',
            inputTx: '',
            inputAddress: event.target.value,
        });
    }

    searchBlock(){
        if(this.state.inputBlock){
            this.setState({
                blockId: this.state.inputBlock,
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
            <div className="BitcoinExplorer">
                <div> 
                    <h1>Bitcoin explorer</h1>
                                    
                    <div className="row justify-content-md-center">
                        <div className="input-group col-md-8">
                            <input 
                                className="form-control py-2 border-right-0 border" 
                                id="inputBlock"
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
                        <div className="input-group col-md-8">
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
                        <div className="input-group col-md-8">
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
                    {this.state.displayBlockInfo ? <BlockInfo blockId={this.state.blockId} unmountMe={this.handleBlockComponentUnmount}/> : null}
                    {this.state.displayTransactionInfo ? <TransactionInfo hashTx={this.state.hashTx} unmountMe={this.handleTxComponentUnmount}/> : null}
                    {this.state.displayAddressInfo ? <AddressInfo address={this.state.address} unmountMe={this.handleAddressComponentUnmount}/> : null}
            </div>
        );  
    }
}

export default BitcoinExplorer;

