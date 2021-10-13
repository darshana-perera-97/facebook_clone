import React from "react";
import Grid from "@mui/material/Grid";
import Profile from "./Layouts/Profile";
import ImageSet from "./Layouts/ImageSet";
import WriteComment from "./Layouts/WriteComment";
import StoriesShort from "./Layouts/StoriesShort";
import Post from "./Layouts/Post";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "10px",
        borderRadius: "12px",
        padding: "8px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Profile />
          <ImageSet />
        </Grid>
        <Grid item xs={5}>
          <WriteComment />
          <StoriesShort />
          <Post />
        </Grid>
        <Grid item xs={3}>
          s
        </Grid>
        <Grid item xs={1}>
          s
        </Grid>
      </Grid>
    </div>
  );
}
