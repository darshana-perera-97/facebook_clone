import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppName from "../Components/AppName";

export default function AppLogo() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{display:"flex"}}>
        <FacebookIcon style={{ fontSize: "35px", color: "white" }} />
        <AppName />
      </div>
    </div>
  );
}
