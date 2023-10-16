import React from "react";

export default function Flip(){
    const [prevstate , currentstae] = React.useState(true)
    function Changestate(){
        currentstae(prevstate => !prevstate)
    }

    return(
        <>
        <div className="state">
            <h1 className="state-title">Are you feel going out tonight</h1>
            <div className="state-value" onClick={Changestate}>
                <h1>{prevstate ? "Yes" : "No"}</h1>
            </div>
        </div>
    </>
    )
}