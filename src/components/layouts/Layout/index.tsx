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
import {a11yProps} from "@util/util"
import { CountryType } from "@models";

interface Props {
    children: React.ReactElement[];
    sesionTabs: TabItem[];
    countriesList: readonly CountryType[];

}

const Index: FC<Props> = ({ children, sesionTabs, countriesList }) => {
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

    const tabsContent = sesionTabs.map((t, i) => (
        <Tab
            key={i}
            label={t.label}
            {...a11yProps(i)}
            sx={{ fontSize: { xs: 14, md: 16 }, textTransform: "none" }}
        />
    ));

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
            <Box component="main" justifyContent="center" >{children}</Box>
            <Footer />
            <SimpleDialog
                open={signinOpen}
                title={"Bienvenidos a LIFBIR"}
                styleDialogTitle={{ m: 0, p: 2, alignSelf: "center" }}
                closeHandler={toggleSignInHandler}
                maxWidth={"sm"}
            >
                <>
                    <Tabs
                        value={valueSesionTab}
                        changeHandler={changeSesionTabHandler}
                        color={ColorEnum.SECONDARY}
                        indicatorColor={"secondary"}
                    >
                        {tabsContent}
                    </Tabs>
                    {valueSesionTab === 0 ? (
                        <SignInForm handleToggleSignIn={toggleSignInHandler} />
                    ) : (
                        <RegisterForm
                            serverErrors={serverErrors}
                            countriesList={countriesList}
                        />
                    )}
                    <Divider />
                    <ConnectThrough linksToSocialMedia={{
                        facebook: "",
                        instagram: undefined,
                        google: "",
                    }}/>
                </>
            </SimpleDialog>
        </>
    );
};

export default Index;