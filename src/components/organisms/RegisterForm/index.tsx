import React, { FC, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import { object, string } from "yup";
import * as yup from "yup";

import {
    Box,
    Button,
    CountrySelect,
    FormHelperText,
    IconButton,
    Image,
    Grid,
    Link,
    Stack,
    TextField,
    Typography,
    CheckBox,
    ConnectThrough,
   
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
} from "@components/organisms/RegisterForm/styles";
import { CountryType } from "@models";
import theme from "@components/theme";
import { RegisterInitialValues } from "@components/organisms/RegisterForm/config";
import imageLogo from "@public/images/LOGO_UNIDO_pink.svg";
import { Divider } from "@mui/material";

interface IProps {
    serverErrors: {
        [p: string]: ArrayLike<unknown>;
    } | null;
    countriesList: readonly CountryType[];
}

const registerInitialValues: FormikValues = {
    email: "",
    password: "",
    confirmPassword: "",
};

const registerValidationSchema = object().shape({
    passport: string().required("val_required"),
    email: string().required("val_required").email("val_invalid_email"),
    password: string().required("val_required").min(8, "val_min_value"),
    confirmPassword: string()
        .required("val_required")
        .min(8, "val_min_value")
        .oneOf([yup.ref("password")], "val_field_not_match"),
});

const Index: FC<IProps> = ({ serverErrors, countriesList }) => {
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [checkedRemember, setCheckedRemember ] = useState(true);

    const passwordToggleHandler = () => {
        setShowPassword(!showPassword);
    };

    const confirmPassToggleHandler = () => {
        setShowConfirmPass(!showConfirmPass);
    };

    const handlerRegisterSubmitHandler = (
        values: FormikValues,
        actions: FormikHelpers<typeof RegisterInitialValues>
    ) => {
        console.log(values);
        console.log(actions);
    };

    const iconButtonPassword = (
        <IconButton
            color={ColorEnum.INHERIT}
            aria-label="toggle password visibility"
            clickHandler={passwordToggleHandler}
            edge={EdgePosEnum.END}
        >
            {showPassword ? <VisibilityOff sx={{color:"secondary.main"}} /> 
            : <Visibility sx={{color:"secondary.main"}} />}
        </IconButton>
    );

    const iconButtonConfirmPassword = (
        <IconButton
            color={ColorEnum.INHERIT}
            aria-label="toggle password visibility"
            clickHandler={confirmPassToggleHandler}
            edge={EdgePosEnum.END}
        >
            {showConfirmPass ? <VisibilityOff sx={{color:"secondary.main"}}/>
             : <Visibility sx={{color:"secondary.main"}} />}
        </IconButton>
    );

    const adormentPassword: Adornment = {
        position: EdgePosEnum.END,
        adornment: iconButtonPassword,
    };

    const adormentConfirmPassword: Adornment = {
        position: EdgePosEnum.END,
        adornment: iconButtonConfirmPassword,
    };

    return (
        <Formik
            enableReinitialize
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={(values, actions) => {
                handlerRegisterSubmitHandler(values, actions);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Box sx={{ padding: 2 }}>
                        {serverErrors && (
                            <FormHelperText error focused style={{ maxWidth: 280, mb: 3 }}>
                                <>{serverErrors}</>
                            </FormHelperText>
                        )}
                        <Grid xs={12} md={12} style={{ padding: 1 }}>
                    <Box sx={{ height: "50px" }} position={"relative"}>
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
                                label={"Correo"}
                                color={ColorEnum.PRIMARY}
                                variant={TextFieldVariantEnum.OUTLINED}
                                fullWidth={true}
                                size={TextFieldSizeEnum.SMALL}
                                typeText={TypeText.EMAIL}
                            />
                        </Stack>
                        <Stack
                            direction={DirectionEnum.COLUMN}
                            spacing={2}
                            style={stylesStack}
                        >
                            <TextField
                                label={"Contraseña"}
                                color={ColorEnum.PRIMARY}
                                variant={TextFieldVariantEnum.OUTLINED}
                                fullWidth={true}
                                size={TextFieldSizeEnum.SMALL}
                                typeText={showPassword ? TypeText.TEXT : TypeText.PASSWORD}
                                adornment={adormentPassword}
                            />
                        </Stack>
                        <Stack
                            direction={DirectionEnum.COLUMN}
                            spacing={2}
                            style={stylesStack}
                        >
                            <TextField
                                label={"Confirmar Contraseña"}
                                variant={TextFieldVariantEnum.OUTLINED}
                                fullWidth={true}
                                color={ColorEnum.PRIMARY}
                                size={TextFieldSizeEnum.SMALL}
                                typeText={showConfirmPass ? TypeText.TEXT : TypeText.PASSWORD}
                                adornment={adormentConfirmPassword}
                            />
                        </Stack>
                        <Stack
                            direction={isSmDown ? DirectionEnum.COLUMN : DirectionEnum.ROW}
                            spacing={2}
                            style={stylesStack}
                        >
                            <CountrySelect
                                countries={countriesList}
                                labelAutoComplete={"Seleccione un Pais"}
                                style={isSmDown ? { width: "100%" } : { width: "55%" }}
                                size={TextFieldSizeEnum.SMALL}
                            />
                            <TextField
                                label={"Teléfono"}
                                variant={TextFieldVariantEnum.OUTLINED}
                                fullWidth={true}
                               color={ColorEnum.PRIMARY}
                                size={TextFieldSizeEnum.SMALL}
                                typeText={TypeText.TELF}
                            />
                        </Stack>
                        <Stack
                            direction={DirectionEnum.COLUMN}
                            spacing={2}>
                            <CheckBox label="Acepto los términos de uso de LIFBIR" checked={checkedRemember}
                             onChange={()=>setCheckedRemember(!checkedRemember)} />
                        </Stack> 
                       
                          <Grid container xs={12} md={12} style={{ padding: 2 }}
                        >
                            <Grid xs={12} md={12}>
                                 <Button
                                disabled={isSubmitting}
                                label={"Registrarse"}
                                variant={ButtonVariantEnum.CONTAINED}
                                style={stylesButton}
                            />
                            </Grid>
                            <Grid style={{textAlign:"center", marginTop: 2}} xs={12} md={12}>
                                 <Link href={"/iniciar_sesion"}>
                                   ¿Ya tiene cuenta?
                                </Link>
                            </Grid>
                            
                        </Grid>
                         <Grid style={{width:"100%", marginTop: 1}} >
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