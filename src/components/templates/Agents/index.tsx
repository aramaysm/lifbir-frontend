import React, { FC, useState } from "react";
import { CountryType } from "@models";
import { Image, Stack, Grid, Box, Button, TextField, Card } from "@components";
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
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Select from "@components/atoms/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { languages, specialities } from "./load_data";
import imageContactAgent from "@public/images/account/undraw_People_search_re_5rre.png";
import imageNotFound from "@public/images/account/undraw_No_data_re_kwbl.png"

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


    const [isNew, setIsNew] = useState(false);
    const [isBadSearch, setIsBadSearch] = useState(true);
    const [searchByLocation, setSearchByLocation] = useState("");
    const [searchByName, setSearchByName] = useState("");
    const [filterBySpeciality, setFilterBySpeciality] = useState("");
    const [filterByLanguage, setFilterByLanguage] = useState("");

    return (
        <Grid  style={{padding:"25px"}}>
        <Stack style={{paddingTop: {xs:7, md:1}}} direction={DirectionEnum.COLUMN}>

            <Stack style={{width:"100%"}}  >
                <Accordion elevation={0} style={{width:"100%", border:"1px solid #eeeeee", boxShadow:"none !important"}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
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
                                        <Typography variant="body1" color="text.primary" 
                                                    sx={{fontWeight:"bold"}} >
                                            Ubicación del agente
                                        </Typography>
                                        <TextField onChange={(event:any)=>
                                          {setIsNew(false);
                                             setSearchByName(event.target.value)}}
                                        color="secondary"
                                    name={"location"}
                                    label={"Ubicacion"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle} />
                                        
                                    </Stack>
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <Stack direction={DirectionEnum.COLUMN}>
                                        <Typography variant="body1" color="text.primary" 
                                                    sx={{fontWeight:"bold"}} >
                                           Nombre del agente
                                        </Typography>
                                        <TextField
                                        onChange={(event:any)=>
                                            {setIsNew(false);
                                             setSearchByName(event.target.value)}}
                                        color="secondary"
                                    name={"name"}
                                    label={"Nombre"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle} />
                                        
                                    </Stack>
                                </Grid>
                                <Grid xs={12} md={3}>
                                     <Stack direction={DirectionEnum.COLUMN}>
                                        <Typography variant="body1" color="text.primary" 
                                                    sx={{fontWeight:"bold"}} >
                                            Especialidad
                                        </Typography>
                                          <Select label="Especialidad"
                                    items={specialities}
                                    fullWidth
                                    placeholder="Seleccionar"
                                    variant={TextFieldVariantEnum.OUTLINED}/>
                                        
                                    </Stack>
                                </Grid>
                                <Grid xs={12} md={3}>
                                     <Stack direction={DirectionEnum.COLUMN}>
                                        <Typography variant="body1" color="text.primary" 
                                                    sx={{fontWeight:"bold"}} >
                                            Idioma
                                        </Typography>
                                          <Select label="Idioma"
                                    items={languages}
                                    fullWidth
                                    placeholder="Seleccionar"
                                    variant={TextFieldVariantEnum.OUTLINED}/>
                                        
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Stack>

            {
                isNew 
                ?
                <Stack style={{width:"100%", marginTop:"50px !important"}}  >
                   <Card title={"Encuentre a un agente"}
                    content={"Para empezar, inicie su busqueda ingresando su ubicacion o especificando el "+
                    "nombre del agente. Opcionalmente puede seleccionar la especialidad y el idioma que domina el agente"}
                     justifyContentAction={"center"}
                     image={imageContactAgent}
                     imagePositionLeft={true}                    
                     styleCard={{boxShadow:"none !important"}}
                     styleTitle={{fontSize:"24px !important"}}
                     styleContent={{fontSize:"20px !important"}}
                     imageSize={{height:"150px", width:"150px"}} 
                    />
                </Stack>
                : 
                isBadSearch 
                ?
                <Stack style={{width:"100%", marginTop:"50px !important"}}  >
                   <Card title={"Ningun agente encontrado"}
                    content={"Para empezar, inicie su busqueda ingresando su ubicacion o especificando el "+
                    "nombre del agente. Opcionalmente puede seleccionar la especialidad y el idioma que domina el agente"}
                     justifyContentAction={"center"}
                     image={imageNotFound}
                     imagePositionLeft={false}
                     imagePositionRight={false}
                     styleCard={{boxShadow:"none !important"}}
                     styleTitle={{fontSize:"20px !important"}}
                     styleContent={{fontSize:"16px !important"}} />
                </Stack>
                :
                <Stack style={{width:"100%"}}  >
                    <h4>List of agents</h4>
                </Stack>


            }
           
        </Stack>
        </Grid>
    )
}

export default AgentsTemplate;