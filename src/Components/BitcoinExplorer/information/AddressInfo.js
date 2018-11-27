import React, {Component} from 'react'
import './information.css'

class AddressInfo extends Component {
    
    constructor(){
        super();
        this.state ={
            data:[]
        }
    }

    dismiss(tx) {
        this.props.unmountMe(tx);
    }

    componentDidMount(){
        this.callAPI()
    }

    componentDidUpdate(prevProps) {
        if (this.props.address !== prevProps.address) {
          this.callAPI();
        }
      }

    callAPI = () => {
        fetch('https://api.blockcypher.com/v1/btc/main/addrs/'+this.props.address)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json
                })
            });
    }
    
    renderAddressInfo(){
        return (
            <div>
                <h3>Address</h3>
                <table className="table" id="tableAddress"> 
                    <tbody> 
                        <tr> 
                            <td>Address</td> 
                            <td>{this.state.data.address}</td> 
                        </tr>
                        <tr> 
                            <td>Number of transactions</td> 
                            <td>{this.state.data.n_tx}</td> 
                        </tr>
                        <tr> 
                            <td>Total received</td> 
                            <td>{this.state.data.total_received}</td> 
                        </tr>
                        <tr> 
                            <td>Total send</td> 
                            <td>{this.state.data.total_sent}</td> 
                        </tr>
                        <tr> 
                            <td>Final balance</td> 
                            <td>{this.state.data.final_balance}</td> 
                        </tr>
                        <tr> 
                        <td>Transactions</td>
                            <td>
                                {this.state.data.txrefs.map((tx) => 
                                   <button key={tx}
                                    type="button"
                                    className="link-button" 
                                    onClick={() => this.dismiss(tx.tx_hash)}>
                                    {tx.tx_hash}
                                  </button>
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
                        {this.renderAddressInfo()}
                    </div>
                );
            }
        }
        
       
        
    }
}

export default AddressInfo;