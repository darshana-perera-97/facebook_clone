import React from "react";
import Avatar from "@mui/material/Avatar";

export default function ProfileDetails() {
  return (
    <div style={{ display: "flex" }}>
      <Avatar
        alt="darshana Perera"
        src="https://scontent.fcmb4-2.fna.fbcdn.net/v/t1.6435-9/201167614_997801037696615_424427897446683562_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oomhDR3SvgQAX_dWdXh&_nc_ht=scontent.fcmb4-2.fna&oh=23b280e81df52462be1033ee33c8b7f2&oe=618A507F"
        style={{ margin: "8px" }}
      />
      <div>
        <p
          style={{
            marginBottom: "0px",
            marginTop: "8px",
            fontWeight: "bold",
            color: "white",
            fontSize: "18px",
          }}
        >
          Darshana Perera
        </p>
        <p
          style={{
            marginBottom: "0px",
            marginTop: "0px",
            color: "white",
            fontSize: "10px",
            opacity:"90%"
          }}
        >
          Student of Trincomalee Campus
        </p>
      </div>
    </div>
  );
}
