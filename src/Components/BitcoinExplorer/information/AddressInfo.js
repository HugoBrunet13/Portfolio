import React, {Component} from 'react'

class AddressInfo extends Component {
    
    render(){
        return(
            <h1>Address: {this.props.address}</h1>
        );
        
    }
}

export default AddressInfo;