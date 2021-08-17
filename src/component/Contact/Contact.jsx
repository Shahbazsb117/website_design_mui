import React from 'react';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

function Contact(props) {
  return (
    <div>
      <br />
      <br />
      <Container fixed >
        <Grid container flex justify="center" style={{ textAlign: "center" }} >
          <Grid item xs={1}>  </Grid>
          <Grid item xs={10}>
            <Card>
              <Typography variant="h2" color="secondary">
                <i>Contact us</i>
              </Typography>
              <br />
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                style={{ width: '50ch' }}
                type="text"
              // value={}
              // onChange={}
              />
              <br />
              <br />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                style={{ width: '50ch' }}
                // value={}
                // onChange={}
                type="email"
              />
              <br />
              <br />
              <TextField
                id="mobilenumber"
                label="Mobile Number"
                variant="outlined"
                style={{ width: '50ch' }}
                // value={}
                // onChange={}
                type="text"
              />
              <br />
              <br />
              <TextareaAutosize 
              aria-label="empty textarea"
               placeholder="Message"
               rowsMin={5}
               rowsMax={7}
               style={{ width: '58ch' }}
                
                />
              <br />
              <br />
              <Button variant="contained" style={{ width: 300 }} color="secondary">
                Send
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

export default Contact;