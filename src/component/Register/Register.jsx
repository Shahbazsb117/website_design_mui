import React from 'react';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

function Register(props) {
    return (
        <div>
            <Container fixed >
                <Grid container flex justify="center" style={{ textAlign: "center" }} >
                    <Grid item xs={1}>  </Grid>
                    <Grid item md={10} sm={12} xs={12}>
                        <Card>
                            <br />
                            <Typography variant="subtitle1" color="secondary">
                                <i>Register</i>
                            </Typography>
                            <br />
                            <TextField
                                id="name"
                                label="User name"
                                variant="outlined"
                                style={{ width: '50ch' }}
                                type="text"
                            />
                            <br />
                            <br />
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                style={{ width: '50ch' }}
                                type="email"
                            />
                            <br />
                            <br />
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                style={{ width: '50ch' }}
                                type="password"
                            />
                            <br />
                            <br />
                            <TextField
                                id="confrim_password"
                                label="Confirm Password"
                                variant="outlined"
                                style={{ width: '50ch' }}
                                type="password"
                            />

                            <br />
                            <br />
                            <Button variant="contained" style={{ width: 300 }} color="secondary">
                                Register
              </Button>
                            <br />
                            <br />
                        </Card>


                    </Grid>
                    <Grid item xs={1}>  </Grid>



                </Grid>
            </Container>

        </div>
    );
}

export default Register;