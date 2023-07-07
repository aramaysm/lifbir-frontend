import React, { FC } from "react";
import { CountryType } from "@models";
import { Image, Stack, Grid, Box, Button, TextField,Typography } from "@components";
import { ButtonVariantEnum, DirectionEnum, ImageLayoutEnum,ImageObjectFitEnum, PositionEnum, TextFieldSizeEnum, TextFieldVariantEnum, TypeText } from "@components/types";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {
     gridContent,
    typograpBreadcrumbs,
   
} from "@components/templates/Account/styles"
import CardIcon from "@components/molecules/Card/CardIcon";
import { arraySocialNetworks, textToDescript } from "./load_data";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

interface IProps {
    user:any;    
}

const IconsList = [
    <FacebookIcon fontSize={"large"} color={"secondary"} key={"Facebook"}/>,
    <InstagramIcon fontSize={"large"} color={"secondary"} key={"Instagram"} />,
    <TwitterIcon fontSize={"large"} color={"secondary"} key={"Twitter"} />,
]


const SocialNetworks_Template: FC<IProps> = ({
    user,
  
}) => {



    return (
        <Grid  style={{padding:"25px"}}>
        <Stack  direction={DirectionEnum.COLUMN}>
            <Grid  xs={12} md={12}>
                <Breadcrumbs aria-label="breadcrumb">                
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/account"
                        sx={typograpBreadcrumbs}
                    >
                        Cuenta
                    </Link>
                    <Typography sx={typograpBreadcrumbs} color="text.primary">Redes sociales</Typography>
                </Breadcrumbs>
            </Grid>
            <Stack style={{width:"100%"}}  >
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.CENTER}
                    verticalPosition={PositionEnum.CENTER}
                    style={gridContent}
                >
                    <Grid  xs={12} md={8}>
                        <Stack style={{width:"100%"}} direction={DirectionEnum.COLUMN}>
                          {
                            arraySocialNetworks.map((item:any,index:number)=>

                                <CardIcon key={item.title} 
                                title={item.title} 
                                icon={IconsList[index]}
                                description={""}
                                connected={false}
                                handleButton={()=>{
                                    console.log("HandleButton")
                                }}  />                            
                            )
                           
                            }
                        </Stack>
                    </Grid>
                     <Grid  xs={12} md={4}>
                        <Grid style={{border:"2px solid #e5e5e5e5"}}>
                            <Typography style={{fontWeight:"bold"}}>
                                {textToDescript.title}
                            </Typography>
                            <Typography>
                                {textToDescript.subtitle}
                            </Typography>
                        </Grid>
                     </Grid>
                </Grid>
            </Stack>
          
        </Stack>
        </Grid>
    )
}

export default SocialNetworks_Template;