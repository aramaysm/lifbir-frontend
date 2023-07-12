import React, { FC, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { object, string } from "yup";

import {
    Box,
    Button,
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
import { SignInInitialValues } from "@components/organisms/SignInForm/config";
import { Divider } from "@mui/material";
import imageLogo from "@public/images/LOGO_UNIDO_pink.svg";


interface IProps {
    handleToggleSignIn: () => void;
}

const signInInitialValues: FormikValues = {
    email: "",
    password: "",
};

const signInValidationSchema = object().shape({
    email: string().email("val_invalid_email").required("val_required"),
    password: string().required("val_required").min(8, "val_min_value"),
});

const Index: FC<IProps> = ({ handleToggleSignIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [changePassOpen, setChangePassOpen] = useState(false);
    const [checkedRemember, setCheckedRemember ] = useState(true);
    const [serverErrors, setServerErrors] = useState<{
        [p: string]: ArrayLike<unknown>;
    } | null>(null);



    const showServerHandlerErrors = (
        error: { [p: string]: ArrayLike<unknown> } | null
    ) => {
        setServerErrors(error);
    };

    const passwordToggleHandler = () => {
        setShowPassword(!showPassword);
    };

    const toggleReqChangePassHandler = () => {
        if (!changePassOpen) {
            showServerHandlerErrors(null);
        }
        setChangePassOpen(!changePassOpen);
    };

    const iconButtonPassword = (
        <IconButton
            color={ColorEnum.INHERIT}
            aria-label="toggle password visibility"
            clickHandler={passwordToggleHandler}
            edge={EdgePosEnum.END}
        >
            {showPassword ? <VisibilityOff sx={{color:"hover.main"}} /> :
             <Visibility sx={{color:"hover.main"}} />}
        </IconButton>
    );

    const adormentPassword: Adornment = {
        position: EdgePosEnum.END,
        adornment: iconButtonPassword,
    };

    const handleOpenChangePass = () => {
        handleToggleSignIn();
        toggleReqChangePassHandler();
    };

    const handlerSignInSubmit = (
        values: FormikValues,
        actions: FormikHelpers<typeof SignInInitialValues>
    ) => {
        console.log(values);
        console.log(actions);
    };

    return (
        <Formik
            enableReinitialize
            initialValues={signInInitialValues}
            validationSchema={signInValidationSchema}
            onSubmit={(
                values: FormikValues,
                actions: FormikHelpers<typeof SignInInitialValues>
            ) => {
                handlerSignInSubmit(values, actions);
            }}
        >
            {({ isSubmitting }) => (
                <Form style={{ width:"100%"}}>
                    <Box  sx={{ padding: 3}}>
                        {serverErrors && (
                            <FormHelperText error focused style={{ maxWidth: 280, mb: 3 }}>
                                <>{serverErrors}</>
                            </FormHelperText>
                        )}
                        {/*<Stack
                            verticalPosition={PositionEnum.CENTER}
                            horizontalPosition={PositionEnum.CENTER}
                            direction={DirectionEnum.ROW}
                            spacing={2}
                            style={stylesStack}>
                      
                            <Typography variant="h5">
                                Bienvenido a 
                            </Typography>
                        </Stack>*/}
                        <Grid  xs={12} md={12} style={{ padding: 1 }}>
                           <Box  sx={{ height: "70px" }} position={"relative"}>
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
                                color="secondary"
                            />
                        </Stack>
                        <Stack
                            direction={DirectionEnum.COLUMN}
                            spacing={2}
                            style={stylesStack}
                        >
                            <TextField
                                name={"password"}
                                label={"Contraseña"}
                                variant={TextFieldVariantEnum.OUTLINED}
                                fullWidth={true}
                                color="secondary"
                                size={TextFieldSizeEnum.SMALL}
                                typeText={showPassword ? TypeText.TEXT : TypeText.PASSWORD}
                                adornment={adormentPassword}
                            />
                        </Stack>
                         <Stack
                            direction={DirectionEnum.COLUMN}
                            spacing={2}
                            verticalPosition={PositionEnum.END}                          
                        >
                            <Typography
                                align={"right"}
                                onClick={handleOpenChangePass}
                                sx={stylesTypography}
                            >
                                ¿Olvidó su contraseña?
                            </Typography>
                        </Stack>
                        <Stack
                            direction={DirectionEnum.COLUMN}
                            spacing={2}>
                            <CheckBox label="Recuerdame" checked={checkedRemember} onChange={()=>setCheckedRemember(!checkedRemember)} />
                        </Stack>                        
                        <Grid container xs={12} md={12} style={{ padding: 2 }}
                        >
                            <Grid xs={12} md={12}>
                                <Button
                                disabled={isSubmitting}
                                label={"Iniciar sesión"}
                                variant={ButtonVariantEnum.CONTAINED}
                                style={stylesButton}
                            />
                            </Grid>
                            <Grid style={{textAlign:"center", marginTop: 2}} xs={12} md={12}>
                                 <Link href={"/registro"}>
                                   ¿Aún no tiene cuenta?
                                </Link>
                            </Grid>
                            
                        </Grid>
                        
                        <Grid style={{width:"100%", marginTop: 2}} >
                            <Divider>Ó</Divider>
                          <ConnectThrough linksToSocialMedia={{facebook:"https://www.facebook.com",
                           google:"https://www.google.com"}} />
                        </Grid>
                       
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default Index;