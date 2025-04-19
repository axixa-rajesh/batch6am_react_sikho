import { Component } from "react";
class Test extends Component{
    constructor() {
        super();
        this.state = { val: 5 };
    }
    render() {
        //this method is override from component
        return <div>
            <button onClick={() => {
                this.setState({ val: this.state.val - 1 })
            }}>-</button>
            <b>{this.state.val}</b>
            <button onClick={() => {
                this.setState({val:this.state.val+1})
            }}>+</button>
        </div>   
        
    }
}
export default Test;