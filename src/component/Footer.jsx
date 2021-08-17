import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

let useStyles = makeStyles({
  txt_align: {
    textAlign: "center",
  },
});

function Footer(props) {
  let classes = useStyles();
  return (
    <div>
      <br />
      <br />
      <Grid
        container
        color="primary"
        style={{ backgroundColor: "#f50057", color: "white" }}
      >
        <Grid item xs={1}></Grid>

        <Grid item md={3} sm={12} xs={12} className={classes.txt_align}>
          <Typography variant="h6" color="initial">
            About us
          </Typography>
          <hr width="120" />
          <Typography variant="subtitle2" color="initial">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
          <br />
        </Grid>

        <Grid item md={3} sm={12} xs={12} className={classes.txt_align}>
          <Typography variant="h6" color="initial">
            Location
          </Typography>
          <hr width="120" />
          <Typography variant="body1" color="initial">
            6-D Main Road Faisal Town Lahore,Punjab Pakistan
          </Typography>
          <br />
        </Grid>

        <Grid item md={3} sm={12} xs={12} className={classes.txt_align}>
          <Typography variant="h6" color="initial">
            Get in touch
          </Typography>
          <hr width="120" />
          <Typography variant="p" color="initial">
            Ph: 0300-1234567
          </Typography>
          <br />
          <Typography variant="p" color="initial">
            Email: abc@gmail.com
          </Typography>
          <Typography variant="p" color="initial">
            {" "}
          </Typography>
          <br />
          <br />
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </Grid>

        <Grid item xs={1}>
          {" "}
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography variant="p" color="initial" className={classes.txt_align}>
            Copyrigth © 2021 Pvt Ltd.
          </Typography>
          <br />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
