import React from "react";

const clickme=()=>{

alert("test");

}

 const Contact =(props)=>{



return(
<div>
<div>Estas en contacto {props.title}!!</div>

<button onClick={clickme}>

    ok
</button>
</div>
);

}
export default Contact