import React from "react";
import List from "./List";

const clickme=()=>{

alert("test");

}

 const Contact =(props)=>{



return(
<div>
<div>Estas en contacto {props.title}!!</div>

<List />
<button onClick={clickme}>

    ok
</button>
</div>
);

}
export default Contact