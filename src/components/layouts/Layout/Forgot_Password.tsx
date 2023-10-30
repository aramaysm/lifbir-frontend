
/* eslint-disable react/jsx-key */
import React, { FC, useContext,useState } from "react";
import { CountryType } from "@models";
import { Image, Stack, Grid, Box, Button,  ForgotPassword } from "@components";
import {  DirectionEnum, ImageLayoutEnum,ImageObjectFitEnum } from "@components/types";
import Typography from '@mui/material/Typography';

import { CssBaseline } from "@mui/material";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import {useAuth} from "@contexts/authcontext/AuthState";
import imageSuccess from "@public/images/account/undraw_mail_sent_re_0ofv.svg";
import { stylesStack } from "@components/organisms/SignInForm/styles";
import Check from "@mui/icons-material/Check";

interface IProps {
    user:any;
    image:string | StaticImageData;
    
}

const ForgotPassword_Layout: FC<IProps> = ({
    user,
    image,
    
}) => {

    
    const {forgot_password} = useAuth();
    const [forgotSuccessFull, setForgotSuccessFull] = useState(false);
    const [errors, setErrors] = useState(null);

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
        const { email } = formData;
        const res = await forgot_password(email);
        console.log("Res",res);

        if (!res.errorMsg ) {
            setForgotSuccessFull(true);         
        } else {
          setErrors(res.errorMsg);
        }
    
    }

    return (
     
      <Grid container style={{ height: '100vh', justifyContent:"center", alignItems:"center" }}>
        <CssBaseline />
       
        <Grid  xs={12} sm={6} md={5} >
            <Grid style={{alignItems:"center" }} >
                { 
                 forgotSuccessFull  ?  
                 <Grid>
                     <Box sx={{ padding: 3, border:"1px solid #d9dbdc", borderRadius:"10px"}} component="form">
                                            
                        <Grid xs={12} md={12} style={{ padding: 1 }}>
                           <Box sx={{ height: "150px", marginBottom: 3 }} position={"relative"}>
                              <Image
                                src={imageSuccess}
                                alt={"Image Login"}
                                layout={ImageLayoutEnum.FILL}
                                objectFit={ImageObjectFitEnum.CONTAIN}
                                objectPosition={"bottom 24%"}
                              />
                           </Box>
                        </Grid>
                        <Grid xs={12} md={12} style={{ padding: 1, textAlign:"center" }}
                        >
                            <Typography variant="h5">
                                Correo enviado exitosamente
                            </Typography>
                        </Grid>
                        </Box>
                    </Grid>
                    :               
                    <ForgotPassword serverErrors={errors} handleToggleSignIn={handleSignIn} />
                    
                    }
            </Grid>
        
        </Grid>
      </Grid>
    
       
    )
}

export default ForgotPassword_Layout;


/*
{
    "email": "owner@gmail.com",
    "password": "Owner123*"
}
*/