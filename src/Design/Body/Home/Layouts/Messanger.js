import React from "react";
import ImageAvatars from "../../../NavBar/Components/ImageAvatars";

export default function Messanger() {
  const messages = [
    { name: "DS Perera1", lastMessage: "ok1", lastSeen: "1 hour ago" },
    { name: "DS Perera2", lastMessage: "ok2", lastSeen: "2 hour ago" },
    { name: "DS Perera3", lastMessage: "ok3", lastSeen: "3 hour ago" },
    { name: "DS Perera4", lastMessage: "ok4", lastSeen: "4 hour ago" },
    { name: "DS Perera5", lastMessage: "ok5", lastSeen: "5 hour ago" },
  ];
  return (
    <div>
      <p style={{ color: "#2E6FEE", width: "100%" }}>Messanger</p>
      <div style={{ backgroundColor: "#e8eaed", padding: "5px 10px" }}>
        {messages.map((val, key) => {
          return (
            <div style={{ display: "flex", width: "100%", margin: "10px" }}>
              <ImageAvatars />
              <div style={{ width: "100%" }}>
                <p
                  style={{
                    color: "#2E6FEE",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                  key={key}
                >
                  {val.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      color: "black",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontSize: "15px",
                      marginLeft: "20px",
                      opacity: "0.8",
                    }}
                    key={key}
                  >
                    {val.lastMessage}
                  </p>
                  <p
                    style={{
                      color: "black",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontSize: "15px",
                      marginLeft: "20px",
                      opacity: "0.6",
                      marginRight: "20px",
                    }}
                    key={key}
                  >
                    {val.lastSeen}
                  </p>
                </div>
                <div style={{ paddingRight: "25px" }}>
                  <hr />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
