import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import './index.css';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Input from "./Input";
import {useDispatch} from 'react-redux';
import { signin, signup } from "../../actions/Auth";


export const Auth = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch({type:"LOGOUT"});
  },[])

  const initialState={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  }

  const [showPassword,setShowPassword]=useState(false)
  const [isSignUp,setIsSignUp]=useState(false)
  const [formData,setFormData]=useState(initialState)
  

  const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!isSignUp){
      // console.log("i m from signin")
      dispatch(signin(formData))
    }else{
      // console.log("i m from signup")

      dispatch(signup(formData))
    }

    console.log(formData);
  };

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const switchMode=()=>{
    console.log(isSignUp);
      setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
      // handleShowPassword(false)
  };
  return (
    <Container  component="main" maxWidth="xs">
      <Paper sx={{
    marginTop:"30px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "16px",
    
  }} elevation={3}>
        <Avatar sx={{
    margin: "8px",
    backgroundColor: 'primary',
  }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography sx={{marginBottom:"15px"}} variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                <Input name="lastName" label="last Name" handleChange={handleChange} half/>
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type='email'/>
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
            { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" sx={ {
    margin: "24px 0 16px 0",
  }}>
            {isSignUp?"Sign Up":"Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
                <Button onClick={switchMode}>
                  {
                    isSignUp?"Already have an account? Sign In ":"Don't have an acount?Sign Up"
                  }
                </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};


