import React, { Component } from 'react'
import MenuPortfolio from './Menu/MenuPortfolio'
import DescriptionPortfolio from './Description/DescriptionPorfolio'
import './HeaderPortfolio.css'


class HeaderPortfolio extends Component {
    constructor(){
        super();
        this.handleShowComponent = this.handleShowComponent.bind(this);
    }

    handleShowComponent(param) {
        this.props.showComponent(param);
    }
    

    render(){
        return(
            <div className="HeaderPortfolio mx-auto">
                <DescriptionPortfolio />
                <MenuPortfolio showComponent={this.handleShowComponent}/>
            </div>
        )
    }
}

export default HeaderPortfolio;