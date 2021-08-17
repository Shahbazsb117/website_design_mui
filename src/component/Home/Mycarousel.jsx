import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Grid from "@material-ui/core/Grid";
import Images from '../../data/Images'


function Mycarousel(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (

        <div>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Slider {...settings}>
                        {
                            Images.map((imag => {
                                return (
                                    <div>
                                        <br />
                                        <img src={imag.imagURL} height="340px" width="100%" />
                                    </div>
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