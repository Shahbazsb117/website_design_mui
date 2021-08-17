import React from "react";
import { Chip, Grid, Typography } from "@material-ui/core";
const handleDelete = () => {
  console.info("You clicked the delete icon.");
};
function Mychip(props) {
  return (
    <div>
      <Grid container>
        <br />
        <Grid item xs={2}>
          <Typography variant="h5" color="initial">
            Filters
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <p>Filtered results ... </p>
          <Chip
            label="Price"
            onDelete={handleDelete}
            color="secondary"
            variant="outlined"
          />
          <Chip
            label="Brand"
            onDelete={handleDelete}
            color="secondary"
            variant="outlined"
          />
          <Chip
            label="Quality"
            onDelete={handleDelete}
            color="secondary"
            variant="outlined"
          />
          <Chip
            label="Reviews"
            onDelete={handleDelete}
            color="secondary"
            variant="outlined"
          />
          <hr />
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </div>
  );
}

export default Mychip;
