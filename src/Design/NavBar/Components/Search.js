import React from "react";


export default function Search() {
  return (
    <div>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Search"
        style={{
          borderColor: "white",
          fontSize: "18px",
          marginTop: "auto",
          marginBottom: "auto",
          borderRadius: "25px",
          paddingLeft: "20px",
          paddingBottom: "1px",
          paddingTop: "5px",
          width:"150%",
          
        }}
      />
      
    </div>
  );
}
