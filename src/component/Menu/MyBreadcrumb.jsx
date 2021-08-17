import React from "react";
import { Breadcrumbs, Grid } from "@material-ui/core";
import { Link } from "@material-ui/core";
function MyBreadcrumb(props) {
  return (
    <div>
      <br />
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/">
          About
        </Link>
        <Link color="inherit" href="/">
          Contact
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default MyBreadcrumb;
<h1>Breadcrumb</h1>;
