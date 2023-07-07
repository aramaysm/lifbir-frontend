import React, { FC, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { object, string } from "yup";

import {
    Box,
    Button,
    FormHelperText,
    IconButton,
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
            {showPassword ? <VisibilityOff sx={{color:"secondary.main"}} /> :
             <Visibility sx={{color:"secondary.main"}} />}
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
                <Form>
                    <Box sx={{ padding: 2 }}>
                        {serverErrors && (
                            <FormHelperText error focused style={{ maxWidth: 280, mb: 3 }}>
                                <>{serverErrors}</>
                            </FormHelperText>
                        )}
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
                            <Button
                                disabled={isSubmitting}
                                label={"Iniciar sesión"}
                                variant={ButtonVariantEnum.CONTAINED}
                                style={stylesButton}
                            />
                        </Stack>
                        <Stack
                            direction={DirectionEnum.COLUMN}
                            spacing={2}
                            verticalPosition={PositionEnum.CENTER}
                            style={{ paddingBottom: 1 }}
                        >
                            <Typography
                                align={"center"}
                                onClick={handleOpenChangePass}
                                sx={stylesTypography}
                            >
                                ¿Olvidó su contraseña?
                            </Typography>
                        </Stack>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default Index;