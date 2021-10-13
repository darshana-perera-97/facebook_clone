import React from "react";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

export default function Adds() {
  const addName = [
    "Add Business",
    "Add Drive",
    "Add Home",
    "Add to Cart",
    "Add Photo",
  ];
  const icons = [
    "AddBusinessIcon",
    "AddToDriveIcon",
    "AddToHomeScreenIcon",
    "AddShoppingCartIcon",
    "AddPhotoAlternateIcon",
  ];
  return (
    <div style={{ marginRight: "10px" }}>
      {addName.map((val, key) => {
        return (
          <div style={{ backgroundColor: "#4167B2",padding:"2px",marginTop:"10px",paddingTop:"10px",borderRadius:"5px" }}>
            <div style={{ textAlign: "center" }}>
              <AddBusinessIcon style={{color:"white"}}/>
            </div>

            <p key={key} style={{ fontSize: "12px", textAlign: "center",color:"white" }}>
              {addName[key]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
