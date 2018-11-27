import React, {Component} from 'react'

class TransactionInfo extends Component {
    
    render(){
        return(
            <h1>Info tx: {this.props.hashTx}</h1>
        );
        
    }
}

export default TransactionInfo;