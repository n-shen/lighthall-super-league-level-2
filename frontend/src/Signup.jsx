import React, { useState } from 'react';
// import {} from 'react-bootstrap'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Login.css';
import { Grid } from '@mui/material';


function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const onChangeRetypePassword = (e) => {
        const retypePassword = e.target.value;
        setRetypePassword(retypePassword);
    }

    const onSubmit = () => {
        console.log("Login successful for: " + username);
    }

  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >
        <Grid item xs={6} width={'100vw'}
        height={'100vh'}>
               
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='4'>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Sign Up</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={onChangeUsername}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={onChangePassword} />
          <MDBInput wrapperClass='mb-4' label='Re-Type Password' id='formControlLg' type='password' size="lg" onChange={onChangeRetypePassword} />


          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn onClick={onSubmit} className="mb-0 px-5" size='lg'>Register</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2"></p>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </Grid>   
    </Grid> 
  );
}

export default Signup;