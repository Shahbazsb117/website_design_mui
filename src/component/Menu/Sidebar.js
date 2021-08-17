import React from "react";
import {
  Card,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Rangeslider from "./Rangeslider";

function Sidebar(props) {
  return (
    <div>
      <Card style={{ paddingLeft: 30 }}>
        <Typography variant="subtitle1" color="secondary">
          Price
        </Typography>
        <FormControlLabel
          label="10$"
          control={<Checkbox value="10$" color="primary" />}
        />
        <br />
        <FormControlLabel
          label="20$"
          control={<Checkbox value="10$" color="primary" />}
        />
        <br />
        <FormControlLabel
          label="30$"
          control={<Checkbox value="10$" color="primary" />}
        />
        <hr />

        <Typography variant="subtitle1" color="secondary">
          Sizes
        </Typography>
        <FormControlLabel
          label="10$"
          control={<Checkbox value="10$" color="primary" />}
        />
        <br />
        <FormControlLabel
          label="20$"
          control={<Checkbox value="10$" color="primary" />}
        />
        <br />
        <FormControlLabel
          label="30$"
          control={<Checkbox value="10$" color="primary" />}
        />
        <hr />
        <Rangeslider />
        <hr />
        <Typography variant="subtitle1" color="secondary">
          Reviews
          <br />
          <br />
          <br />
        </Typography>
      </Card>
    </div>
  );
}

export default Sidebar;
