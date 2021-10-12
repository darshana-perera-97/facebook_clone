import React from "react";
import Grid from "@mui/material/Grid";
import Home from "./Home/Home";

export default function Body() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={1} xl={1}>
          <p></p>
        </Grid>
        <Grid item md={10} xl={10} xs={12}>
          <Home />
        </Grid>
        <Grid item md={1} xl={1}>
          <p></p>
        </Grid>
      </Grid>
    </div>
  );
}
