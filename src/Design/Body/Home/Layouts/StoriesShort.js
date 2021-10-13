import React from "react";

export default function StoriesShort() {
  const images = [
    "https://lh3.googleusercontent.com/proxy/j61IYaJkin5Ea8yi2GmYtuPC_o2PU44-uAZd-C179cHS1L7dchcuH8jTZwSnz72La7XBTGFi55SuXYjQEFovV8ddqAu8I4gGXh--_XBefKrQuXqiNjw7RlzHo6xVVjYHkf89ZS4rX9cD0ivwTRJHm0Csoi76",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVXglCrfVQ49UGqSKU9vxn5UXrFJ0YtYajw&usqp=CAU",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  ];
  return (
    <div style={{padding:"0px 15px"}}>
      <p style={{ marginBottom: "2px", marginTop: "2px", color: "#2E6FEE" }}>
        Stories
      </p>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        {images.map((val, key) => {
          return (
            <img
              id="images"
              src={val}
              height="120px"
              width="80px"
              style={{ padding: "5px" }}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}
