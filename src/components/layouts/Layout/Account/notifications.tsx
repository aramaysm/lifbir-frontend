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
import { ColorEnum, TabItem } from "@components/types";

import { CountryType } from "@models";

interface Props {
    user:object;

}

 const Notifications_Layout: FC<Props> = ({ user}) => {
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
            <Navbar
                enterAnchorEl={enterAnchorEl}
                handleEnterMenuOpen={enterMenuOpenHandler}
                handleEnterMenuClose={handleEnterMenuClose}
            />
            <Box sx={{padding: {xs:1, md:10}}} component="main" justifyContent="center" >
               <h1>Notifications</h1>
            </Box>
           
        </>
    );
};

export default Notifications_Layout;