import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Grid from "@material-ui/core/Grid";
// import Images from '../../data/Images'
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@material-ui/core';


const Images = [
    {
        id: 1,
        imagURL: "images/1.jpg"
    },
    {
        id: 2,
        imagURL: "images/ds.jpg"
    },
    {
        id: 3,
        imagURL: "images/3.jpg"
    },
    {
        id: 3,
        imagURL: "images/3.jpg"
    },
    {
        id: 3,
        imagURL: "images/3.jpg"
    },
    {
        id: 3,
        imagURL: "images/1.jpg"
    },
    {
        id: 3,
        imagURL: "images/2.jpg"
    }
]
function Mycarousel(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    };
    return (

        <div>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Grid >
                        <Typography style={{ textAlign: "center" }}>Multislider</Typography>
                    </Grid>
                    <Slider {...settings}>
                        {
                            Images.map((imag => {
                                return (
                                    <Box>

                                        <Grid item md={11} container >
                                            <br />
                                            <Card >
                                                <CardActionArea>
                                                    <CardMedia>
                                                        <img src={imag.imagURL} height="100" width="100%" />
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
                                            <br />
                                        </Grid>
                                    </Box>
                                )
                            }))
                        }
                    </Slider>
                    <Grid item xs={1}></Grid>

                </Grid>
            </Grid>
        </div>
    );
}

export default Mycarousel;