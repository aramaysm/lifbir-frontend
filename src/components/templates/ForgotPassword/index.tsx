import React, { FC, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import  VisibilityOff  from "@mui/icons-material/VisibilityOff";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { object, string } from "yup";

import {
    Box,    
    CheckBox,
    ConnectThrough,
    FormHelperText,
    Grid,
    IconButton,
    Image,
    Link,
    Stack,
    TextField,
    Typography,
} from "@components";
import {
    Adornment,
    ButtonVariantEnum,
    ColorEnum,
    DirectionEnum,
    EdgePosEnum,
    ImageLayoutEnum,
    ImageObjectFitEnum,
    PositionEnum,
    TextFieldSizeEnum,
    TextFieldVariantEnum,
    TypeText,
} from "@components/types";
import {
    stylesButton,
    stylesStack,
    stylesTypography,
} from "@components/organisms/SignInForm/styles";
import Alert from '@mui/material/Alert';
import { SignInInitialValues } from "@components/organisms/SignInForm/config";
import { Divider,Button } from "@mui/material";
import imageLogo from "@public/images/account/undraw_forgot_password_re_hxwm.svg";


interface IProps {
    handleToggleSignIn: (formData:any) => void;
    serverErrors: string|null;
}

const signInInitialValues: FormikValues = {
    email: "",
    password: "",
};

const signInValidationSchema = object().shape({
    email: string().email("val_invalid_email").required("val_required"),
    password: string().required("val_required").min(8, "val_min_value"),
});

const Index: FC<IProps> = ({ handleToggleSignIn, serverErrors }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [changePassOpen, setChangePassOpen] = useState(false);
    const [checkedRemember, setCheckedRemember ] = useState(true);
    

    const [formData, setFormData]= useState({
        email:"",
        password:"",
    })



    const showServerHandlerErrors = (
        error: { [p: string]: ArrayLike<unknown> } | null
    ) => {
        //setServerErrors(error);
    };

    const passwordToggleHandler = () => {
        setShowPassword(!showPassword);
    };

    const toggleReqChangePassHandler = () => {
        if (!changePassOpen) {
            showServerHandlerErrors(null);
        }
        setChangePassOpen(!changePassOpen);
        setShowPassword(!showPassword);
    };

    const iconButtonPassword = (
        <IconButton
            color={ColorEnum.INHERIT}
            aria-label="toggle password visibility"
            clickHandler={passwordToggleHandler}
            edge={EdgePosEnum.END}
        >
            {showPassword ? <Visibility sx={{color:"hover.main"}} />
             :             
             <VisibilityOff sx={{color:"hover.main"}} />
             }
        </IconButton>
    );

    const adormentPassword: Adornment = {
        position: EdgePosEnum.END,
        adornment: iconButtonPassword,
    };

    const handleOpenChangePass = () => {
        //handleToggleSignIn();
        toggleReqChangePassHandler();
    };

    /*const handlerSignInSubmit = (
        values: FormikValues,
        actions: FormikHelpers<typeof SignInInitialValues>
    ) => {
        console.log("Values: ",values);
        console.log(actions);
    };*/
    
    const handlerSignInSubmit = ( ev:any) => {
        console.log("Values: ",formData);
        ev.preventDefault();
        handleToggleSignIn(formData);
    }

    const onChangeInput = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    console.log("Show password - ", showPassword);

    return (
        <Formik
            enableReinitialize
            initialValues={signInInitialValues}
            validationSchema={signInValidationSchema}
            onSubmit={(
                values: FormikValues,
                actions: FormikHelpers<typeof SignInInitialValues>
            ) => {
               
            }}>
           
                <Form style={{ width:"100%"}} onSubmit={(ev) => {
                    ev.preventDefault()
                    handlerSignInSubmit(ev);}}>
                    <Box sx={{ padding: 3, border:"1px solid #d9dbdc", borderRadius:"10px"}} component="form">
                        {serverErrors && (
                             <Alert severity="error">
                               {serverErrors}
                            </Alert>
                            
                        )}
                     
                        <Grid xs={12} md={12} style={{ padding: 1 }}>
                           <Box sx={{ height: "150px", marginBottom: 3 }} position={"relative"}>
                              <Image
                                src={imageLogo}
                                alt={"Image Login"}
                                layout={ImageLayoutEnum.FILL}
                                objectFit={ImageObjectFitEnum.CONTAIN}
                                objectPosition={"bottom 24%"}
                              />
                           </Box>
                        </Grid>
                   
                        <Stack
                            direction={DirectionEnum.COLUMN}
                            spacing={2}
                            style={stylesStack}
                        >
                            <TextField
                                name={"email"}
                                label={"Correo"}
                                variant={TextFieldVariantEnum.OUTLINED}
                                fullWidth={true}
                                size={TextFieldSizeEnum.SMALL}
                                typeText={TypeText.EMAIL}
                                color={ColorEnum.PRIMARY}
                                onChange={onChangeInput}
                            />
                        </Stack>                        
                                                
                        <Grid container xs={12} md={12} style={{ padding: 2, marginTop: 3 }}
                        >
                            <Grid xs={12} md={12}>
                                <Button
                                 type="submit"                                                          
                                variant={ButtonVariantEnum.CONTAINED}
                                sx={stylesButton}
                                onClick={handlerSignInSubmit}
                            >
                              Recuperar contraseña  
                            </Button>
                            </Grid>
                            <Grid style={{textAlign:"center", marginTop: 2}} xs={12} md={12}>
                                 <Link href={"/iniciar_sesion"}>
                                   Regresar a iniciar sesión
                                </Link>
                            </Grid>
                            
                        </Grid>                        
                       
                    </Box>
                </Form>
           
        </Formik>
    );
};

export default Index;