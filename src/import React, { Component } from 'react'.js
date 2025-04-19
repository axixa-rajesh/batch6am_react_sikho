import React, { Component } from 'react';
class Cc extends Component {
    constructor(props) {
        super(props);
        this.state ={...props.data,val:0};
    }
    shouldComponentUpdate() {
        if (this.state.val < this.state.limit)
            return true;
        window.alert("Limit Over");
        return false;
    }
    
    componentDidUpdate() {
        console.log("Component updated ho gaya");
            
    }
    render() {
        return (
            <div>
                {this.state.product} {this.state.price} {this.state.val}
                <button onClick={() => {
                    this.setState({val:this.state.val+1})
                }}>Go</button>
            </div>

        );
    }
}

export default Cc;