import React, { Component } from 'react'
import './BestRate.css'
import img from './bestRate.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class BestRate extends Component{
    render() {
        return(
            <div className="BestRate">
                <h2>The Exchange Rate Path Problem</h2>

                <div className="row justify-content-md-center">
                    <div className="col col-md-auto">
                        Description
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    <img src={img} className="rounded mx-auto d-block" alt="example"></img>
                    </div>
                    <div className="col-sm"> 
                    <FontAwesomeIcon icon={['fab', 'github']}  size="3x"/>
                    <FontAwesomeIcon icon={['fab', 'python']}  size="3x"/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BestRate;