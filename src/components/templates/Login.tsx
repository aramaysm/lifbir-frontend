
/* eslint-disable react/jsx-key */
import React, { FC, useContext } from "react";
import { CountryType } from "@models";
import { Image, Stack, Grid, Box, Button, TextField, SignInForm, RegisterForm } from "@components";
import { ButtonVariantEnum, DirectionEnum, ImageLayoutEnum,ImageObjectFitEnum, PositionEnum, TextFieldSizeEnum, TextFieldVariantEnum, TypeText } from "@components/types";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {
    typograpBreadcrumbs,
    
} from "@components/templates/Account/styles"
import { Avatar, Card, CardContent, Checkbox, CssBaseline, FormControlLabel, Paper, ThemeProvider } from "@mui/material";
import  AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import WorkIcon from "@mui/icons-material/Work";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import  CreditCard  from "@mui/icons-material/CreditCard";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import {useAuth} from "@contexts/authcontext/AuthState";

const iconsList = [
    <AccountBoxIcon sx={{fontSize:"100px", marginLeft:"auto", marginRight:"auto"}} color={"secondary"}/>, 
    <LockIcon sx={{fontSize:"100px"}} color={"secondary"}/>,
    <CreditCard sx={{fontSize:"100px"}} color={"secondary"}/>,
    <SettingsIcon sx={{fontSize:"100px"}} color={"secondary"}/>,
    <NotificationsIcon sx={{fontSize:"100px"}} color={"secondary"}/>,
    <WorkIcon sx={{fontSize:"100px"}} color={"secondary"}/>,
];

interface IProps {
    user:any;
    image:string | StaticImageData;
    countriesList: readonly CountryType[];  
    isLogin: boolean; 
    
}

const Login_Template: FC<IProps> = ({
    user,
    image,
    countriesList,
    isLogin,
}) => {

    
    const {login} = useAuth();

    const imageContent = image ? (
        <Image
            src={image}
            alt={"Image Login"}
            layout={ImageLayoutEnum.FILL}
            objectFit={ImageObjectFitEnum.COVER}
            objectPosition={"bottom 24%"}
        />
    ) : null;

    const { push } = useRouter();

   
    const handleSignIn = async(formData:any) => {
        const { email, password } = formData;
        const res = await login(email, password);
        if (res) {
           window.history.pushState(
            `/`,
            "auth-login",
            `/`
          );
          window.location.reload();
         
        } else {
          alert("Error")
        }
    
    }

    return (
     
      <Grid container style={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          xs={0}
          sm={6}
          md={7}
          
        >
           <Box sx={{ height: {xs:"0", sm:"100vh", md:"100vh"} }} position={"relative"}>
                {imageContent}
           </Box>

        </Grid>
        <Grid  xs={12} sm={6} md={5} >
            <Grid style={{alignItems:"center" }} >
                {
                    isLogin ?
                        <SignInForm  handleToggleSignIn={handleSignIn}/>
                    :
                        <RegisterForm serverErrors={null} countriesList={countriesList} />
                }
            </Grid>
        
        </Grid>
      </Grid>
    
       
    )
}

export default Login_Template;