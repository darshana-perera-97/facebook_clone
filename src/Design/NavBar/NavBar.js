import React from "react";
import AppLogo from "./Layouts/AppLogo";

export default function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "#2E6FEE",
        paddingBottom: "0.5%",
        paddingTop: "0.8%",
        paddingLeft: "2%",
      }}
    >
      {/* <p style={{ marginBottom: "auto", marginTop: "auto" }}>sas</p> */}
      <AppLogo />
    </div>
  );
}
