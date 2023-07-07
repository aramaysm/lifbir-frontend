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

import { CountryType, LanguageType } from "@models";

import PreferencesTemplate from "@components/templates/Account/preferencies";

interface Props {
    countriesList: readonly LanguageType[];
    imgProfile:any;
    user:object;

}

 const Preferences_Layout: FC<Props> = ({ user, countriesList}) => {
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

    const itemsRadioButton = [
        {
            label:"Pies cuadrados",
            value: "0",
        },
         {
            label:"Metros cuadrados",
            value:"1",
        },
    ]

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
                <PreferencesTemplate itemsRadioButton={itemsRadioButton}
                 countriesList={countriesList} user={user}  />
            </Box>
           
        </>
    );
};

export default Preferences_Layout;