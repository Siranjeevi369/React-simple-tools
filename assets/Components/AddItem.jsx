import React from "react";
import ReactDOM  from "react-dom";

export default function AddItem(){
    const [previtem,addnewitem] = React.useState(["Think1","Think2"])
   function calcItem(){
      addnewitem(data => {return [...previtem , `Think ${previtem.length + 1}`]
   })
   }
   const newthink = previtem.map(things => <p key={things}>{things}</p>)
    return(
        <div>
        <div className="items">
            <button className="Add-item" onClick={calcItem}>Add Item</button>
            {newthink}
        </div>
        </div>
    )
}