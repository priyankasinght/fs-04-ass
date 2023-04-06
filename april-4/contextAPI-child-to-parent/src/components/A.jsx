import { useState } from "react";
import B from "./B";
import myContext from "./context";

function A(props) {
    
    const [state, setState] = useState("");

    return (
        <div>
            <h2>A Component</h2>
            <p>D component data : {state} </p>
            <hr />
            <myContext.Provider value={{ setState }}>
                <B />
            </myContext.Provider>
        </div>
    );
}

export default A;