
import React, { FC } from "react";
import { CountryType, LanguageType, RadioButtonType } from "@models";
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
import Select from "@components/atoms/Select";
import RadioButtonGroup from "@components/atoms/RadioButtonGroup";


interface IProps {
    user:any;  
    countriesList: readonly LanguageType[]; 
    itemsRadioButton: readonly RadioButtonType[];
}

const PreferencesTemplate: FC<IProps> = ({
    user,
    countriesList,
    itemsRadioButton,
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
                    <Typography sx={typograpBreadcrumbs} color="text.primary">Preferencias</Typography>
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
                                {"PREFERENCIAS"}
                           </Typography>                         
                        </Box>
                    </Grid>
                    <Grid xs={12} md={12}>
                        <Grid container spacing={2} style={{marginTop:"15px !important",
                             width:"100%"}}>
                                <Grid xs={12} md={7}>
                                   <Select label="Idioma"
                                    items={countriesList}
                                    fullWidth
                                    placeholder="Seleccionar"
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    helperText="Seleccione un idioma" />
                                </Grid>
                                
                                <Grid xs={12} md={7}>
                                <Select label="Moneda preferida"
                                    items={countriesList}
                                    fullWidth
                                    placeholder="Seleccionar"
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    helperText="Seleccione una moneda preferida" />
                                </Grid>
                                <Grid xs={12} md={7}>
                               <Select label="Zona horaria"
                                    items={countriesList}
                                    fullWidth
                                    placeholder="Seleccionar"
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    helperText="Seleccione una zona horaria" />
                                </Grid>
                                 <Grid xs={12} md={10}>
                                   <RadioButtonGroup items={itemsRadioButton}
                                   label="Unidad de medida" />
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
           
        </Stack>
        </Grid>
    )
}

export default PreferencesTemplate;