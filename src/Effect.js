import { useState } from "react";
const Effect = () => {
    let [x, setx] = useState('');
    return <h1>hi I am {x} and I am x of Jeeshan
        <button onClick={() => {
            let name = window.prompt("Enter your X name:");
            x = name;
            window.alert(x);
        }}>
            Change
    </button>
    </h1>
}
const Daku = function () {
    return <h2>Dakuda re</h2>
}
export { Daku };
export default Effect;