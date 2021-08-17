import Mycarousel from './Mycarousel'
import React from 'react';
import Btngroup_carousel from './Btngroup_carousel';
import Btnimages from '../../data/Btnimages';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase, Typography, Grid, Container, Card, } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    title_txt:{
        textAlign: "center", 
        padding: 10,
         height: 178
    },
    body_txt:{
        textAlign:"justify"
    }
}));








function Home(props) {
    const classes = useStyles();
    return (
        <div>
            <Mycarousel />
            <br />
            <Btngroup_carousel />
            <br />
            <Container fixed>
                <Grid container spacing={5}>
                    <Grid item md={6} sm={12} xs={12}>
                        <div className={classes.root}>
                            <ButtonBase
                                focusRipple
                                key="ttile"
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: "100%",
                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url('../../images/1.jpg')`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {"Title"}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Card className={classes.title_txt} >
                            <Typography variant="h4" color="initial">
                                Title
                        </Typography>
                            <Typography variant="body1" color="initial" className={classes.body_txt}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque quas, adipisci necessitatibus, et earum beatae facere similique optio corporis aliquid officia. Est, placeat. Tenetur sed velit cupiditate reiciendis quisquam.
                        </Typography>
                        </Card>
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <Card className={classes.title_txt} >
                            <Typography variant="h4" color="initial">
                                Title
                        </Typography>
                            <Typography variant="body1" color="initial" className={classes.body_txt}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque quas, adipisci necessitatibus, et earum beatae facere similique optio corporis aliquid officia. Est, placeat. Tenetur sed velit cupiditate reiciendis quisquam.
                        </Typography>
                        </Card>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <div className={classes.root}>
                            <ButtonBase
                                focusRipple
                                key="ttile"
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: "100%",
                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url('../../images/1.jpg')`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {"Title"}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        </div>
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <div className={classes.root}>
                            <ButtonBase
                                focusRipple
                                key="ttile"
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: "100%",
                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url('../../images/1.jpg')`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {"Title"}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Card className={classes.title_txt} >
                            <Typography variant="h4" color="initial">
                                Title
                        </Typography>
                            <Typography variant="body1" color="initial" className={classes.body_txt}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque quas, adipisci necessitatibus, et earum beatae facere similique optio corporis aliquid officia. Est, placeat. Tenetur sed velit cupiditate reiciendis quisquam.
                        </Typography>
                        </Card>
                    </Grid>






                </Grid>
            </Container>



        </div>
    );
}

export default Home;