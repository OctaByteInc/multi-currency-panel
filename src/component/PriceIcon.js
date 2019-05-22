import React, {Component} from 'react';

class PriceIcon extends Component {

    render(){
        return(
            <div className="price-icon-wrapper">
                <img alt="Currency icon" src={this.props.src} />
            </div>
        )
    };

}

export default PriceIcon;