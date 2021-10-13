import React from "react";
import ImageAvatars from "../../../NavBar/Components/ImageAvatars";
import TextField from "@mui/material/TextField";

export default function WriteComment() {
  return (
    <div style={{padding:"15px"}}>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "10px" }}>
          <ImageAvatars />
        </div>
        <TextField
          id="standard-helperText"
          label="What do you think?"
          defaultValue="Write something here..."
          helperText=""
          variant="standard"
          style={{ marginLeft: "10px" }}
        />
      </div>
      <button
        style={{
          width: "100%",
          color: "white",
          backgroundColor: "#2E6FEE",
          borderColor: "#2E6FEE",
          padding:"2px 0px"
        }}
      >
        Post
      </button>
    </div>
  );
}
