import React, { Component } from 'react';


class Cd extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props.data, val: 0 };
     
    } 
    getSnapshotBeforeUpdate(ppros, pstate) {
        if (this.state.val > this.state.limit)
            document.getElementById('t1').value = this.state.limit;
        return "done";
        
    }
    shouldComponentUpdate() {
        if (this.state.val < this.state.limit)
            return true;
        window.alert("Limit Over");
        return false;
    }
    componentDidUpdate() {
        
    }
    render() {
          return (
            <div>
                {this.state.product} {this.state.price} {this.state.val}
                  <input type='number' id="t1" value={this.state.val} onChange={ (e)=> {
                      this.setState({ ...this.state, val: e.target.value });
                      
                }}></input>
            </div>

        );
    }
}

export default Cd;