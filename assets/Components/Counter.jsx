import React from "react";

export default function Counter(){
    const [data , setcount] = React.useState(0)
    function add(){
        setcount((data)=>{
            return data + 1;
        })
    }
    function minus(){
        setcount((data) => {
            return data -1
        })
    }

    return(
        <div className="counter">
            <button className="minus" onClick={minus}>-</button>
            <div className="counter--count">
                <h1>{data}</h1>
            </div>
            <button className="plus" onClick={add}>+</button>
        </div>
    )
}