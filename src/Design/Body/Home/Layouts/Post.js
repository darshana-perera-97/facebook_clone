import React from "react";
import ImageAvatars from "../../../NavBar/Components/ImageAvatars";
import Reaction from "../Components/Reaction";

export default function Post() {
  return (
    <div
      style={{
        margin: "10px 15px",
        backgroundColor: "#e8eaed",
        padding: "10px 15px",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <ImageAvatars />
        <div>
          <p
            style={{
              marginBottom: "0px",
              marginTop: "0px",
              marginLeft: "10px",
              fontWeight: "bold",
              color: "#2E6FEE",
              fontSize: "20px",
            }}
          >
            Darshana Perera
          </p>
          <p
            style={{
              marginBottom: "0px",
              marginTop: "0px",
              marginLeft: "10px",
              color: "black",
              fontSize: "12px",
              opacity: "0.6",
            }}
          >
            Posted 49 mins ago
          </p>
        </div>
      </div>
      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          fontSize: "14px",
          padding: "5px 0px",
        }}
      >
        React (also known as React.js or ReactJS) is a free and open-source
        front-end JavaScript library[3] for building user interfaces or UI
        components. It is maintained by Facebook and a community of individual
        developers and companies.
      </p>
      <img
        src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2"
        width="80%"
        height="150px"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      />
      <Reaction />
    </div>
  );
}
