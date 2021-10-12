import React from "react";
import SingleMenuItem from "../Components/SingleMenuItem";

export default function Menu() {
    const menuItems = ["Feeds","Events","Groups","Pages","Comments"]
  return (
    <div style={{ marginLeft: "10%" }}>
      {menuItems.map((val,key)=>{
          return(
            <SingleMenuItem key={key} val={val}/>
          );
      })}
    </div>
  );
}
