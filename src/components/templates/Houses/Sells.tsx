
import React, { FC, SyntheticEvent, useState } from "react";
import { Agent_Dto, CountryType, Sell_House_Dto } from "@models";
import { Image, Stack, Grid, Box, Button, TextField, Card, CardAgent, ContactCard, Table, ReviewCard, Card_Sell_House} from "@components";
import { ButtonVariantEnum, ColorEnum, DirectionEnum, ImageLayoutEnum,ImageObjectFitEnum, PositionEnum, ReactElementNull, TabItem, TextFieldSizeEnum, TextFieldVariantEnum, TypeDataColumn, TypeText } from "@components/types";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {
    imageProfileStyle,
    gridImageProfileStyle, 
    gridContent,
    typograpBreadcrumbs,
    stylesButtonGridOutlined,
   gridContent_AgentData,
    stylesBoxTabs,    
} from "@components/templates/Agents/styles";
import Select from "@components/atoms/Select";
import { useRouter } from 'next/navigation';
import { PrecioSelect } from "./load_data";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { textFieldStyle } from "../Account/styles";
import { specialities, languages } from "../Agents/load_data";
import TuneIcon from "@mui/icons-material/Tune";



interface IProps {
    sells: Sell_House_Dto[];
}

const SellTemplate: FC<IProps> = ({
   sells,
}) => {
   
    
    return (
        <Grid style={{padding:"0px !important",paddingTop:"25px", margin:0, width:"100%"}}>
        <Stack style={{width:"100%"}}
         direction={DirectionEnum.COLUMN}>
           
           <Accordion elevation={0} style={{width:"100%", border:"1px solid #eeeeee", boxShadow:"none !important"}}>
                        <AccordionSummary
                        expandIcon={<TuneIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography variant="h6">Filtros</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack style={{width:"100%"}}  >
                              <Grid
                                    container
                                    spacing={2}
                                    horizontalPosition={PositionEnum.CENTER}
                                    verticalPosition={PositionEnum.CENTER}
                                    style={{width:"100%"}} 
                                >
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                                            
                                            <TextField onChange={(event:any)=>{}}
                                                color={ColorEnum.SECONDARY}
                                                name={"location"}
                                                label={"Ubicacion"}
                                                variant={TextFieldVariantEnum.OUTLINED}
                                                fullWidth={true}
                                                size={TextFieldSizeEnum.SMALL}
                                                />
                                            
                                        </Stack>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                                           
                                            <TextField
                                            onChange={(event:any)=>{}}
                                            color={ColorEnum.SECONDARY}
                                            name={"name"}
                                            label={"Nombre"}
                                            variant={TextFieldVariantEnum.OUTLINED}
                                            fullWidth={true}
                                            size={TextFieldSizeEnum.SMALL}
                                            />
                                            
                                        </Stack>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                                            
                                            <Select label="Tipo de propiedad"
                                                items={PrecioSelect}
                                                fullWidth
                                                placeholder="Seleccionar"
                                                variant={TextFieldVariantEnum.OUTLINED}/>
                                            
                                        </Stack>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                                            
                                            <Select label="Precio"
                                                items={PrecioSelect}
                                                fullWidth
                                                placeholder="Seleccionar"
                                                variant={TextFieldVariantEnum.OUTLINED}/>
                                            
                                        </Stack>
                                    </Grid>
                                </Grid>  
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
            <Grid style={{width:"100%"}}  >
               
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.SPACING_AROUND}
                    style={{display:"flex", justifyContent:"space-around", marginTop:5}}
                >
                    {
                        sells.map((item) => {
                            return (
                                <Grid key={item.id} container xs={12} md={3} style={{padding:2}} >
                                  <Card_Sell_House type={"Sell"} 
                                    price={item.price}
                                    bedrooms={item.bedrooms}
                                    bathrooms={item.bathrooms} sqft={item.sqft}
                                    photo={item.photo}
                                    address={item.address}
                                    city={item.city} 
                                    is_favorite={item.is_favorite} />
                                </Grid>
                            )
                        })
                       
                    }
                    
                </Grid>
            </Grid>
           
        </Stack>
        </Grid>
    )
}

export default SellTemplate;






