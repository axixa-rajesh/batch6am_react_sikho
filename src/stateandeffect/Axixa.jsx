import { useState } from "react";

const Axixa = () => {
    let [x, setx] = useState(1);
    return <div>
        <button onClick={() => {
            setx(x - 1)
        }}>+</button>
        <b>{x}</b>
        <button onClick={() => {
           setx(x+1)
    }}>+</button>
    </div>
}
export default Axixa;