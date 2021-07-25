import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card mt-2 mb-3">
                    <img src={this.props.anh} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title float-start">{this.props.product_name}</h5>
                    <p className="card-text float-end">{this.props.product_price}</p>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Content;