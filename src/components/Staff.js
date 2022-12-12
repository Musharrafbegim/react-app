import React from "react";

function Staff(props){
    return(
        <div className="staff">
            <ol>
                <li>Employee {props.name} {props.role ? props.role : "No Role"}</li>
            </ol>
            
        </div>
    )
}


export default Staff