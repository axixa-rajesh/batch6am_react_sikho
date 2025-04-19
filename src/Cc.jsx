import React, { Component } from 'react';


class Cc extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props.data, val: 0 };
        console.log("I will mount only one time");

    }
    componentDidMount() {
        console.log("I am did mount");

    }
    getSnapshotBeforeUpdate(ppros, pstate) {
        
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log(props);
    //     console.log(state);
        
        
    // }
    componentDidUpdate() {
        console.log("Component updated ho gaya");

    }
    shouldComponentUpdate() {
        if (this.state.val < this.state.limit)
            return true;
        window.alert("Limit Over");
        return false;
    }
    // componentDidUpdate() {
    //     window.alert(this.state.limit - this.state.val);
        
    // }
    render() {
        console.log("I am rendering");

        return (
            <div>
                {this.state.product} {this.state.price} {this.state.val}
                <button onClick={() => {
                    this.setState({ val: this.state.val + 1 })
                }}>Go</button>
            </div>

        );
    }
}

export default Cc;