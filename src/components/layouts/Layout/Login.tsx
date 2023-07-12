import React, { FC, MouseEvent, SyntheticEvent, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Tab from "@mui/material/Tab";

import {
    Box,
    ConnectThrough,
    Divider,
    Footer,
    Navbar,
    RegisterForm,
    SignInForm,
    SimpleDialog,
    Tabs,
} from "@components";
import Login_Template from "@components/templates/Login";
import { CountryType } from "@models";


interface Props {
    image:any;
    user:object;
    countriesList?: readonly CountryType[];
    isLogin: boolean;
}

 const Login_Layout: FC<Props> = ({ user, image,countriesList,isLogin }) => {
    const [signinOpen, setSigninOpen] = useState(false);
    const [enterAnchorEl, setEnterAnchorEl] = useState<null | HTMLElement>(null);
    const [serverErrors, setServerErrors] = useState<{
        [p: string]: ArrayLike<unknown>;
    } | null>(null);
    const [valueSesionTab, setValueSesionTab] = useState(0);

    const changeSesionTabHandler = (event: SyntheticEvent, newValue: number) => {
        setValueSesionTab(newValue);
    };

    const showServerHandlerErrors = (
        error: { [p: string]: ArrayLike<unknown> } | null
    ) => {
        setServerErrors(error);
    };
   

    const toggleSignInHandler = () => {
        if (!signinOpen) {
            showServerHandlerErrors(null);
        }
        
        setSigninOpen(!signinOpen);
       
    };

    const enterMenuOpenHandler = (event: MouseEvent<HTMLElement>) => {
        setEnterAnchorEl(event.currentTarget);
    };

    const enterMenuCloseHandler = (target = "") => {
        if (target.includes("l")) {
            toggleSignInHandler();
        }
        setEnterAnchorEl(null);
    };

    const handleEnterMenuClose = (target = "") => {
        enterMenuCloseHandler(target);
    };

    return (
        <>
            <CssBaseline />
           
            <Box component="main" >
                <Login_Template image={image} user={user} isLogin={isLogin}
                 countriesList={countriesList} />
            </Box>
           
        </>
    );
};

export default Login_Layout;