import React from "react";
import { Grid, Select, MenuItem, Typography } from "@material-ui/core";
import MyBreadcrumb from "./MyBreadcrumb";
function Breadcrumb_select(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <MyBreadcrumb />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={2}>
          <br />
          <Select>
            <MenuItem value="">Select Order</MenuItem>
            <MenuItem value="Asc">Asc</MenuItem>
            <MenuItem value="Desc">Desc</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default Breadcrumb_select;
