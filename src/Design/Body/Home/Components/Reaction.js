import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

export default function Reaction() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
        marginRight:"40px"
      }}
    >
      <div style={{ opacity: "0.5" }}>
        <ThumbUpIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
        <CommentIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
        <ShareIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
      </div>
      <p style={{marginTop:"-4px",marginBottom:"0px",opacity:"0.6"}}>21 Comments</p>
    </div>
  );
}
