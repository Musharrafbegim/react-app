import React from "react";

function Staff(props){
    return(
        <div>
            <h1>List of all Staff</h1>
            <ol>
                <li>Employee {props.name}</li>
            </ol>
        </div>
    )
}


export default Staff