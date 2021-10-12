import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Icons() {
  return (
    <div style={{ marginTop: "auto", marginBottom: "auto" }}>
      <GroupIcon
        style={{ paddingLeft: "10px", paddingRight: "10px", color: "white" }}
      />
      <ChatIcon
        style={{ paddingLeft: "10px", paddingRight: "10px", color: "white" }}
      />
      <NotificationsNoneIcon
        style={{ paddingLeft: "10px", paddingRight: "10px", color: "white" }}
      />
      <GroupAddIcon
        style={{ paddingLeft: "10px", paddingRight: "10px", color: "white" }}
      />
      <HelpIcon
        style={{ paddingLeft: "10px", paddingRight: "10px", color: "white" }}
      />
      <LogoutIcon
        style={{ paddingLeft: "10px", paddingRight: "10px", color: "white" }}
      />
    </div>
  );
}
