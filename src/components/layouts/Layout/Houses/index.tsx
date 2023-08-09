
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

import { CountryType, Sell_House_Dto } from "@models";
import ProfileTemplate from "@components/templates/Account/profile";
import AgentsTemplate from "@components/templates/Agents";
import SellTemplate from "@components/templates/Houses/Sells";

interface Props {
    countriesList: readonly CountryType[];
    houses: any[];
    type: string;

}

 const Houses_Layout: FC<Props> = ({ houses,countriesList,type }) => {
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
                { type === "Rent"
                  ?
                  <SellTemplate  sells={houses} />
                  : type === "Sell" 
                    ?
                    <SellTemplate  sells={houses} />
                    :
                    <SellTemplate  sells={houses} />
                }
            </Box>
           
        </>
    );
};

export default Houses_Layout;

