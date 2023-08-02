/* eslint-disable react/jsx-key */
import React, { FC } from "react";
import { CountryType } from "@models";
import { Image, Stack, Grid, Box, Button, TextField } from "@components";
import { ButtonVariantEnum, DirectionEnum, ImageLayoutEnum,ImageObjectFitEnum, PositionEnum, TextFieldSizeEnum, TextFieldVariantEnum, TypeText } from "@components/types";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {
    imageProfileStyle,
    gridImageProfileStyle, 
    gridContent,
    typograpBreadcrumbs,
    
} from "@components/templates/Account/styles"
import { Card, CardContent } from "@mui/material";
import  AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import WorkIcon from "@mui/icons-material/Work";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import  CreditCard  from "@mui/icons-material/CreditCard";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { cardsAccountOptions,arrayUrlsAccount } from "./load_data";
import { useRouter } from "next/navigation";


const iconsList = [
    <AccountBoxIcon sx={{fontSize:"100px", marginLeft:"auto", marginRight:"auto"}} color={"secondary"}/>, 
    <LockIcon sx={{fontSize:"100px"}} color={"secondary"}/>,
    <CreditCard sx={{fontSize:"100px"}} color={"secondary"}/>,
    <SettingsIcon sx={{fontSize:"100px"}} color={"secondary"}/>,
    <NotificationsIcon sx={{fontSize:"100px"}} color={"secondary"}/>,
    <WorkIcon sx={{fontSize:"100px"}} color={"secondary"}/>,
];

interface IProps {
    user:any;
    imgProfile:any;   
}

const Account_Template: FC<IProps> = ({
    user,
    imgProfile,
}) => {

    const { push } = useRouter();

    const handleClickCard = (index:number) => {
        push("/account"+arrayUrlsAccount[index]);
    }

    return (
        <Grid style={{padding:"15px"}}>
            <Stack  direction={DirectionEnum.COLUMN}>
                <Grid style={{marginTop:"50px"}} xs={12} md={12}>
                    <Breadcrumbs aria-label="breadcrumb">                
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/account"
                            sx={typograpBreadcrumbs}
                        >
                            Cuenta
                        </Link>
                       </Breadcrumbs>
                </Grid>
                <Grid xs={12} md={12}>
                    <Typography variant="h6" color="text.main" sx={{fontWeight:"bold"}}>{user.name+" "+ user.lastname}</Typography>
                    <Typography variant="body1" color="customGrey.main">{"onellmedoza86@gmail.com"}</Typography>
                </Grid>
                <Stack style={{width:"100%", marginTop:"25px"}}  >
                    <Grid container
                        spacing={4}
                        horizontalPosition={PositionEnum.CENTER}
                        verticalPosition={PositionEnum.CENTER}
                    >
                       
                           { cardsAccountOptions.map((item,index)=>
                            <Grid key={item.title} xs={12} md={4} style={{height:"100%"}}>
                            <Card onClick={()=>handleClickCard(index)}
                            sx={{
                                height:"100%",
                                backgroundColor: "white",
                                borderRadius:"15px",
                                boxShadow: "0 5px 10px 2px rgb(150 150 150/ 15%)",
                                "&:hover": {
                                    backgroundColor:"secondary.main",
                                    transform: "scale(1.01)",
                                    transition: "0.5s",
                                    cursor: "pointer",
                                },
                                "&:hover *": {
                                    color:"white",
                                },
                            }}
                        >
                            <CardContent style={{height:"100%"}} >
                                        <Box sx={{ height: "120px", justifyContent:"center", display:"flex"}}                                         
                                         position={"relative"}>
                                            {iconsList[index]}
                                        </Box>
                                        <Box sx={{ paddingTop: 1 }}>
                                            <Stack spacing={2} style={{ alignItems:"center !important"}}
                                            direction={DirectionEnum.COLUMN}>
                                                <Typography
                                                    variant="h6"
                                                    color="text.secondary"
                                                    sx={{fontWeight:"bold"}}>
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    color="text.secondary"
                                                   
                                                >
                                                    {item.description}
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    </CardContent>
                                            </Card>
                                            </Grid>
                           )
                           
                            }
                          
                        
                        
                    </Grid>
                </Stack>
                
            </Stack>
        </Grid>
    )
}

export default Account_Template;