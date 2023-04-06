 import { useContext } from "react";
 import myContext from "./context";

 function D(props) {
   const { data } = useContext(myContext);
   return (
     <div>
       <h2>D Component</h2>
       <p style={{ color: "red" }}>{data}</p>
     </div>
   );
 }

 export default D;
