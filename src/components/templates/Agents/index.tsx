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
    stylesButtonGridOutlined,
    textFieldStyle,
    stylesButtonGridContained,
} from "@components/templates/Account/styles"


interface IProps {
    user:any;
    imgProfile:any;
    countriesList: readonly CountryType[];
}

const AgentsTemplate: FC<IProps> = ({
    user,
    imgProfile,
    countriesList,
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
                    <Typography sx={typograpBreadcrumbs} color="text.primary">Perfil</Typography>
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
                    <Grid xs={12} md={2}>
                        <Box sx={gridImageProfileStyle} position={"relative"}>
                            <Image src={imgProfile}
                            priority
                            style={imageProfileStyle}
                            alt="Image profile"                            
                            objectFit={ImageObjectFitEnum.CONTAIN} />
                        </Box>
                    </Grid>
                    <Grid xs={12} md={10}>
                        <Stack direction={DirectionEnum.COLUMN}>
                            <Typography variant="h5" color="text.primary" 
                                        sx={{fontWeight:"bold"}} >
                                {"Hola, mi nombre es "+user.name}
                            </Typography>
                            <Typography variant="body1" color="text.primary" 
                                        sx={{fontWeight:"bold"}} >
                                {"Se registró el "+  "03-06-2023"}
                            </Typography>
                            <Grid container spacing={2} style={{marginTop:"25px !important",
                             width:"100%"}}>
                                <Button                               
                                    label={"Actualizar foto de perfil"}
                                    variant={ButtonVariantEnum.CONTAINED}
                                    style={stylesButtonGridOutlined}
                                />
                                <Button                                
                                    label={"Verificar identidad"}
                                    variant={ButtonVariantEnum.CONTAINED}
                                    style={stylesButtonGridOutlined}
                                />
                            </Grid>
                            
                        </Stack>
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
                                {"INFORMACION PERSONAL"}
                           </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={12}>
                        <Grid container spacing={2} style={{marginTop:"15px !important",
                             width:"100%"}}>
                                <Grid xs={12} md={4}>
                                    <TextField
                                    name={"names"}
                                    label={"Nombres"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle} />
                                </Grid>
                                <Grid xs={12} md={8}>
                                    <TextField
                                    name={"lastname"}
                                    label={"Apellidos"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle}/>
                                </Grid>
                                <Grid xs={12} md={4}>
                                    <TextField
                                    name={"sex"}
                                    label={"Sexo"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle}
                                    typeText={TypeText.EMAIL} />
                                </Grid>
                                <Grid xs={12} md={10}>
                                    <TextField
                                    name={"language"}
                                    label={"Idiomas"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle}
                                    typeText={TypeText.EMAIL} />
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
                                {"INFORMACION DE CONTACTO"}
                           </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={12}>
                        <Grid container spacing={2} style={{marginTop:"15px !important",
                             width:"100%"}}>
                                <Grid xs={12} md={10}>
                                    <TextField
                                    name={"email"}
                                    label={"Correo electrónico"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle}
                                    typeText={TypeText.EMAIL} />
                                </Grid>
                                <Grid xs={12} md={10}>
                                    <TextField
                                    name={"phone"}
                                    label={"# de teléfono"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle}/>
                                </Grid>
                                <Grid xs={12} md={10}>
                                    <TextField
                                    name={"country"}
                                    label={"País"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle}/>
                                </Grid>
                       
                            
                            <Grid container spacing={2} style={{marginTop:"25px !important"}}>
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
        </Stack>
        </Grid>
    )
}

export default AgentsTemplate;