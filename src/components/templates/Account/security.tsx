import React, { FC } from "react";
import { CountryType } from "@models";
import { Image, Stack, Grid, Box, Button, TextField } from "@components";
import { ButtonVariantEnum, ColorEnum, DirectionEnum, ImageLayoutEnum,ImageObjectFitEnum, PositionEnum, TextFieldSizeEnum, TextFieldVariantEnum, TypeText } from "@components/types";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {
    imageProfileStyle,
    gridImageProfileStyle, 
    gridContent,
    typograpBreadcrumbs,
    stylesButtonGridOutlined,
    textFieldStyle,
    stylesButtonGridContained,
} from "@components/templates/Account/styles"


interface IProps {
    user:any;   
}

const SecurityTemplate: FC<IProps> = ({
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
                    <Typography sx={typograpBreadcrumbs} color="text.primary">Seguridad e Inicio de Sesión</Typography>
                </Breadcrumbs>
            </Grid>
            
            <Stack style={{width:"100%", marginTop:"15px"}}  >
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.CENTER}
                    verticalPosition={PositionEnum.CENTER}
                    style={gridContent}
                >
                    <Grid xs={12} md={12}>
                        <Box  position={"relative"}>
                           <Typography variant="body1" color="greyText.main" >
                                {"CONTRASEÑA"}
                           </Typography>
                           <Typography sx={{marginTop:"10px"}} variant="body2" color="greyText.main" >
                                {"Ultima actualización: hace dos semanas"}
                           </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={12}>
                        <Grid container spacing={2} style={{marginTop:"15px !important",
                             width:"100%"}}>
                                <Grid xs={12} md={6}>
                                    <TextField color={ColorEnum.SECONDARY}
                                    name={"password"}
                                    label={"Contraseña actual"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    typeText={TypeText.PASSWORD}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle} />
                                </Grid>
                                <Grid xs={12} md={6}>
                                <Typography style={{marginTop:"auto"}} variant="body1" color="greyText.main" >
                                    {"¿Olvidó su contraseña?"}
                                </Typography>
                                </Grid>
                                <Grid xs={12} md={7}>
                                <TextField color={ColorEnum.SECONDARY}
                                    name={"new_password"}
                                    label={"Contraseña nueva"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    typeText={TypeText.PASSWORD}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle} />
                                </Grid>
                                <Grid xs={12} md={7}>
                                <TextField color={ColorEnum.SECONDARY}
                                    name={"confirm_password"}
                                    label={"Contraseña actual"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    typeText={TypeText.PASSWORD}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle} />
                                </Grid>
                            
                            <Grid container xs={12} md={8} spacing={2} style={{marginTop:"25px !important"}}>
                                <Button                               
                                    label={"Guardar"}
                                    variant={ButtonVariantEnum.CONTAINED}
                                    style={stylesButtonGridContained}
                                />
                               
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Stack>
            <Stack style={{width:"100%", marginTop:"15px"}}  >
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.CENTER}
                    verticalPosition={PositionEnum.CENTER}
                    style={gridContent}
                >
                    <Grid xs={12} md={12}>
                        <Box  position={"relative"}>
                           <Typography variant="body1" color="greyText.main" >
                                {"ACCESOS A LA CUENTA"}
                           </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={12}>
                        <Grid container spacing={2} style={{marginTop:"15px !important",
                             width:"100%"}}>
                                <Grid container xs={12} md={12}>
                                   <Grid xs={12} md={9} direction={DirectionEnum.COLUMN}>
                                   <Typography variant="body1" color="greyText.main" >
                                {"IOS 8.5 - Chrome Mobile"}
                           </Typography>
                           <Typography variant="body1" color="greyText.main" >
                                {"Florida, 26 de agosto 2023, 10:15 PM"}
                           </Typography>
                                   </Grid>
                                   <Grid xs={12} md={3}>
                                   <Button                               
                                    label={"Cerrar sesión"}
                                    variant={ButtonVariantEnum.CONTAINED}
                                    style={stylesButtonGridContained}
                                />
                                   </Grid>
                                </Grid>
                        </Grid>

                         <Grid container spacing={2} style={{marginTop:"15px !important",
                             width:"100%"}}>
                                <Grid container xs={12} md={12}>
                                   <Grid xs={12} md={9} direction={DirectionEnum.COLUMN}>
                                   <Typography variant="body1" color="greyText.main" >
                                {"Windows 11 - Mozilla Firefox"}
                           </Typography>
                           <Typography variant="body1" color="greyText.main" >
                                {"Florida, 26 de agosto 2023, 10:15 PM"}
                           </Typography>
                                   </Grid>
                                   <Grid xs={12} md={3}>
                                   <Button                               
                                    label={"Cerrar sesión"}
                                    variant={ButtonVariantEnum.CONTAINED}
                                    style={stylesButtonGridContained}
                                />
                                   </Grid>
                                </Grid>
                                
                       
                            
                            
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Stack>

            <Stack style={{width:"100%", marginTop:"15px"}}  >
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.CENTER}
                    verticalPosition={PositionEnum.CENTER}
                    style={gridContent}
                >
                    <Grid xs={12} md={9}>
                        <Box position={"relative"}>
                           <Typography variant="body1" color="greyText.main" >
                                {"ELIMINAR CUENTA"}
                           </Typography>
                           <Typography sx={{marginTop:"10px"}} variant="body2" color="greyText.main" >
                                {"Si lo haces, tu cuenta y tus datos se borraran de forma permannete"}
                           </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={3}>
                    <Button                               
                                    label={"Eliminar cuenta"}
                                    variant={ButtonVariantEnum.CONTAINED}
                                    style={stylesButtonGridContained}
                                />
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
        </Grid>
    )
}

export default SecurityTemplate;