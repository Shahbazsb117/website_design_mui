import  Typography from '@material-ui/core/Typography';
import  Grid from '@material-ui/core/Grid';
import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import Multi_item_carousel from '../About/Multi_item_carousel';



function About(props) {
    return (
        <div>
            <br />
          <Typography variant="h5" color="secondary" style={{textAlign:"center", fontStyle:"italic",}}>
              About us
              <hr width="200" color="secondary" />
          </Typography>
          <br />
    <Grid container >
        <Grid item md={1}></Grid>
         <Grid item md={6} sm={10} xs={10}>
             <img src={'images/3.jpg'} height="200"/>
         </Grid>
         <Grid item md={3} sm={6} xs={12} >
             <Typography variant="subtitle1" color="secondary">
                 Who we are ?
             </Typography>
             <Typography variant="p" color="initial" >
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quasi quia quae sapiente voluptate explicabo voluptatem inventore a magni velit sint culpa voluptas, esse ad dignissimos eum iusto consequuntur animi.
                 </Typography>
         </Grid>
         <Grid item md={1}></Grid>
    </Grid>
    <br />
    <br />
          <Typography variant="h5" color="secondary" style={{textAlign:"center", fontStyle:"italic",}}>
             Our Services
          </Typography>
          <br />
          <Grid container  justify="space-between">
              <Grid item md={1}></Grid>
              <Grid item md={3} >
                  <Card >
                      <CardActionArea>
                          <CardMedia>
                              <img src={'images/3.jpg'} height="100"width="100%" />
                          </CardMedia>
                          <CardContent>
                             <Typography variant="subtitle2" color="secondary">
                                 Wordpress
                             </Typography>
                             <Typography variant="body2" color="initial">
                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis illo vitae animi eum, aperiam eaque!
                             </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
              </Grid>
              <Grid item md={3} >
              <Card >
                      <CardActionArea>
                          <CardMedia>
                              <img src={'images/3.jpg'} height="100"width="100%" />
                          </CardMedia>
                          <CardContent>
                             <Typography variant="subtitle2" color="secondary">
                                SEO
                             </Typography>
                             <Typography variant="body2" color="initial">
                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis illo vitae animi eum, aperiam eaque!
                             </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card> 
              </Grid>
              <Grid item md={3} >
              <Card >
                      <CardActionArea>
                          <CardMedia>
                              <img src={'images/3.jpg'} height="100"width="100%" />
                          </CardMedia>
                          <CardContent>
                             <Typography variant="subtitle2" color="secondary">
                                 Wordpress
                             </Typography>
                             <Typography variant="body2" color="initial">
                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis illo vitae animi eum, aperiam eaque!
                             </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
            
              </Grid>
              <Grid item md={1}></Grid>
              
          </Grid>

        <Multi_item_carousel />


        </div>
    );
}

export default About; 