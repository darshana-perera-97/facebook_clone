import React from "react";

export default function AccountDetails() {
  return (
    <div style={{paddingTop:"5px",marginBottom:"5px"}}>
      <div style={{ marginLeft: "10%", display: "flex" }}>
        <p
          style={{
            marginBottom: "auto",
            marginTop: "0px",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          310 Posts
        </p>
        <div
          style={{
            marginBottom: "auto",
            marginTop: "auto",
            fontSize: "15px",
            marginLeft: "10px",
            backgroundColor: "red",
            borderRadius: "10px",
            padding: "0px 5px",
          }}
        >
          <p
            style={{
              marginBottom: "auto",
              marginTop: "auto",
              color: "white",
              fontSize: "12px",
            }}
          >
            NEW
          </p>
        </div>
      </div>
      <div style={{ marginLeft: "10%", display: "flex" }}>
        <p
          style={{
            marginBottom: "auto",
            marginTop: "0px",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          20 Notifications
        </p>
        <div
          style={{
            marginBottom: "auto",
            marginTop: "auto",
            fontSize: "15px",
            marginLeft: "10px",
            backgroundColor: "red",
            borderRadius: "10px",
            padding: "0px 5px",
          }}
        >
          <p
            style={{
              marginBottom: "auto",
              marginTop: "auto",
              color: "white",
              fontSize: "12px",
            }}
          >
            NEW
          </p>
        </div>
      </div>
    </div>
  );
}
