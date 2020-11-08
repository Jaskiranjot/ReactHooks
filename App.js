import React, { useState } from "react";


const App = () => {
    const state = useState();
    let [count, setCount] = useState(0);
    // console.log(state)

    const Increment =() => {
        setCount(count+1)
        console.log("clicked" + count)
    }
return(
    <div>
        <p>Do you like my work</p>
        <button onClick={Increment}>Click me!</button>
        <p>Likes {count} </p>
    </div>
)
}

export default App;