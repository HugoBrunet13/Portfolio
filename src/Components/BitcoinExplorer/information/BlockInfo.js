import React, {Component} from 'react'

class BlockInfo extends Component {
    
    constructor(){
        super();
        this.state ={
            data:[]
        }
    }

    componentDidMount(){
        this.callAPI()
    }

    componentDidUpdate(prevProps) {
        if (this.props.blockId !== prevProps.blockId) {
          this.callAPI();
        }
      }

    callAPI = () => {
        fetch('https://api.blockcypher.com/v1/btc/main/blocks/'+this.props.blockId)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json
                })
            });
    }
    
    renderBlockInfo(){
        return (
            <div>
            <h3>Block {this.props.blockId}</h3>
            <table className="table" id="tableBlock"> 
            <tbody> 
                <tr> 
                    <td>Hash of the block</td> 
                    <td>{this.state.data.hash}</td> 
                </tr>
                <tr> 
                    <td>Time</td> 
                    <td>{this.state.data.time}</td> 
                </tr>
                <tr> 
                <td>Received time</td> 
                    <td>{this.state.data.received_time}</td> 
                </tr>
                <tr> 
                <td>Chain</td> 
                    <td>{this.state.data.chain}</td> 
                </tr>
                <tr> 
                    <td>Size of the block</td> 
                    <td>{this.state.data.size}</td> 
                </tr>
                <tr> 
                    <td>Total</td> 
                    <td>{this.state.data.total}</td> 
                </tr>
                <tr> 
                    <td>Transactions</td> 
                    <td>{this.state.data.txids.map( (tx) => 
                            <div><a>{tx}</a></div>
                        )}
                    </td> 
                </tr>
            </tbody> 
        </table>
        </div>
        )
    }

    render(){   
        if(this.state.data.length==0)
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
                        {this.renderBlockInfo()}
                    </div>
                );
            }
        }
        
       
        
    }
}

export default BlockInfo;