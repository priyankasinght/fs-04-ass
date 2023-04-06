import { useContext, useState } from "react";
import myContext from "./context";

function D(props) {
    const { setState } = useContext(myContext);
    const [dvalue, setDvalue] = useState();
    return (
        <div>
            <h2>D Component</h2>
            <input
                type="text"
                onChange={(e) => {
                    setDvalue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    setState(dvalue);
                }}
            >
                Send Data to Parent
            </button>
        </div>
    );
}

export default D;