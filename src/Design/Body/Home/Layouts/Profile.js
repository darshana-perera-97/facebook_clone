import React from "react";
import ProfileDetails from "../Components/ProfileDetails";
import AccountDetails from "../Components/AccountDetails";
import Menu from "./Menu";

export default function Profile() {
  return (
    <div
      style={{
        backgroundColor: "#4167B2",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      <ProfileDetails />
      <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <hr />
      </div>
      <AccountDetails />
      <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <hr />
      </div>
      <Menu />
    </div>
  );
}
