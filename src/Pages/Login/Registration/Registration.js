import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, FormControl, Input, InputAdornment, CircularProgress, Alert, AlertTitle, ButtonGroup } from '@mui/material';
import LockClockIcon from '@mui/icons-material/LockClock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import './Registration.css';
import useAuth from '../../../Hooks/useAuth';




const Registration = () => {
    const [isLogindata, setIsLogindata] = useState({});

    const { user, CreateaUser, logindata, userErrer, signInWithGoogle, signInWithFacebook } = useAuth();


    const location = useLocation();
    const navigate = useNavigate();



    const onBlure = blure => {
        const field = blure.target.name;
        const value = blure.target.value;
        const newLogindata = { ...isLogindata };
        newLogindata[field] = value;
        console.log(newLogindata);
        setIsLogindata(newLogindata)
    };




    const handelCreateaUser = e => {

        if (isLogindata.password !== isLogindata.password1) {
            alert('Password Was Wrong')
            return
        }

        CreateaUser(isLogindata.email, isLogindata.password, isLogindata.name, location, navigate);

        e.preventDefault();

    };



    const handelOnClickGoogle = () => {
        signInWithGoogle(location, navigate)
    }




    const handelOnClickFacebook = () => {
        signInWithFacebook(location, navigate)
    }








    return (
        <div className='Registration'>
            <Link className='BackIcon' to='/'>
                <ArrowBackIosNewIcon /> <span>MediCare</span>
            </Link>
            <h1 style={{ color: '#FFFFFF', fontWeight: '700', textAlign: "center" }} >Signup</h1>

            {!logindata &&



                <form >


                    <FormControl variant="standard">

                        <Input sx={{ color: '#ffffff', margin: "20px", fontWeight: "600", fontSize: "20px" }}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon sx={{ color: "#F98506", fontSize: "30px" }} />
                                </InputAdornment>
                            }
                            placeholder='Email'
                            type='email'
                            label="Name"
                            variant="standard"
                            name='email'
                            onBlur={onBlure}
                        />


                        <Input sx={{ color: '#ffffff', margin: "20px", fontSize: "20px" }}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockClockIcon sx={{ color: "#F98506", fontSize: "30px" }} />
                                </InputAdornment>
                            }

                            placeholder='Password'
                            type='Password'
                            variant="standard"
                            name='password1'
                            onBlur={onBlure}
                        />

                        <Input sx={{ color: '#ffffff', margin: "20px", fontSize: "20px" }}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockClockIcon sx={{ color: "#F98506", fontSize: "30px" }} />
                                </InputAdornment>
                            }

                            placeholder='Password'
                            type='Password'
                            variant="standard"
                            name='password'
                            onBlur={onBlure}
                        />



                        <Link to="/Login">
                            <small style={{ color: '#000', fontWeight: '700' }} >Already have an account</small>
                        </Link>
                        <br></br>



                        <Button variant='contained' onClick={handelCreateaUser} type="Submit"> Signup </Button>
                    </FormControl>

                </form>}

            {logindata &&
                <CircularProgress color="inherit" />}


            {user?.email && <Alert sx={{ width: '25%', margin: '20px' }} severity="success">
                <AlertTitle>Thanks</AlertTitle>
                You Are Successfully Signup With Us <strong> <Link to='/'> check it out!</Link></strong>
            </Alert>}




            {userErrer && <Alert sx={{ width: '30%', margin: '0 auto', marginTop: '50px' }} severity="error">
                <AlertTitle>Error</AlertTitle>
                {userErrer} <strong> <Link to='/login'>Go Login</Link></strong>
            </Alert>}


            <ButtonGroup className='ButtonGroup'>

                <Button onClick={handelOnClickGoogle} sx={{ width: '50%', border: 'none' }} type="Submit"><GoogleIcon /> </Button>
                <Button onClick={handelOnClickFacebook} sx={{ width: '50%', border: 'none' }} type="Submit"> <FacebookIcon /> </Button>

            </ButtonGroup>


            <div className="outText">
                <Link to='/registered' style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                    <small >Already have an account ? Login</small>  </Link>

                <Link to="/"><Button style={{ textDecoration: 'none', color: '#FFFFFF' }} variant="outlined">Home</Button></Link>

            </div>


        </div>
    );
};

export default Registration;