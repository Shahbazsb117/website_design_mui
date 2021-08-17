import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Grid,makeStyles,CardActionArea
} from "@material-ui/core";
import Products from "../../data/Products";

import Sidebar from "./Sidebar";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
  },
  media: {
    height: 130,
  },
});

function MyCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item md={2} sm={2} xs={2}>
          <Sidebar />
        </Grid>

        <Grid item xs={10}>
          <Grid container xs={12}>
            {Products.map((p) => {
              return (
                <div>
                  <Grid item md={12} sm={12} xs={12} style={{ paddingLeft: 30 }}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={p.image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {p.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {p.descrription}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          size="small"
                          color="secondary"
                          variant="contained"
                        >
                          Rs: {p.price}
                        </Button>
                        <Button
                          size="small"
                          color="secondary"
                          variant="contained"
                          onClick={() => alert('Under Construction')  }
                        >
                          ADD To Cart
                        </Button>
                      </CardActions>
                    </Card>
                    <br />
                  </Grid>
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyCard;
