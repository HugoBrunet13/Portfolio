import React, {Component} from 'react'
import './information.css'              

class TransactionInfo extends Component {
    
    constructor(){
        super();
        this.state ={
            data:[]
        }
    }

    dismiss(param) {
        this.props.unmountMe(param);
    }
    

    componentDidMount(){
        this.callAPI()
    }

    componentDidUpdate(prevProps) {
        if (this.props.hashTx !== prevProps.hashTx) {
          this.callAPI();
        }
      }

    callAPI = () => {
        fetch('https://api.blockcypher.com/v1/btc/main/txs/'+this.props.hashTx)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json
                })
            });
    }
    
    renderTxInfo(){
        return (
            <div>
                <h3>Transaction</h3>
                <table className="table" id="tableTransac"> 
                    <tbody> 
                        <tr> 
                            <td>Hash of the transaction</td> 
                            <td>{this.state.data.hash}</td> 
                        </tr>
                        <tr> 
                            <td>Confirmed</td> 
                            <td>{this.state.data.confirmed}</td> 
                        </tr>
                        <tr> 
                            <td>Received</td> 
                            <td>{this.state.data.received}</td> 
                        </tr>
                        <tr> 
                            <td>Size (bytes)</td> 
                            <td>{this.state.data.size}</td> 
                        </tr>
                        <tr> 
                            <td>Included in Block</td> 
                            <td>
                                <button 
                                    type="button"
                                    className="link-button" 
                                    onClick={() => this.dismiss(this.state.data.block_height)}>
                                    {this.state.data.block_height}
                                </button>
                            </td> 
                        </tr>
                        <tr> 
                            <td>Number of confirmations</td> 
                            <td>{this.state.data.confirmations}</td>
                        </tr>
                        <tr> 
                            <td>Addresses</td> 
                            <td>
                            {this.state.data.addresses.map((adr) => 
                                <div key={adr.toString()}> 
                                    <button 
                                        type="button"
                                        className="link-button" 
                                        onClick={() => this.dismiss(adr)}>
                                        {adr}
                                    </button>
                                </div>
                            )}
                            </td> 
                        </tr>
                    </tbody> 
                </table>
            </div>
        )
    }

    render(){   
        if(this.state.data.length===0)
        {
            return(<div></div>)
        }
        else{
            if(this.state.data.error){
                return(
                    <div>
                        <h4>{this.state.data.error}</h4>
                    </div>
                )
            } else{
                return(
                    <div>
                        {this.renderTxInfo()}
                    </div>
                );
            }
        }
        
       
        
    }
}

export default TransactionInfo;