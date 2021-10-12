import React from "react";
import AppLogo from "./Layouts/AppLogo";
import Search from "./Components/Search";
import IconSet from "./Layouts/IconSet";

export default function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "#2E6FEE",
        paddingBottom: "0.5%",
        paddingTop: "0.8%",
        paddingLeft: "2%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* <p style={{ marginBottom: "auto", marginTop: "auto" }}>sas</p> */}
      <AppLogo />
      <Search />
      <IconSet />
    </div>
  );
}
