import React, { FC, useState } from "react";
import { Agent_Dto, CountryType } from "@models";
import { Image, Stack, Grid, Box, Button, TextField, Card, CardAgent } from "@components";
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
import { Accordion, AccordionDetails, AccordionSummary, Divider, Pagination } from "@mui/material";
import Select from "@components/atoms/Select";
import TuneIcon from "@mui/icons-material/Tune";
import { languages, specialities, agents } from "./load_data";
import imageContactAgent from "@public/images/account/undraw_People_search_re_5rre.png";
import imageNotFound from "@public/images/account/undraw_No_data_re_kwbl.png";
import profilePhoto from "@public/images/account/boy_small.png";
import { useRouter } from 'next/navigation';



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


    const [isNew, setIsNew] = useState<boolean>(true);
    const [isBadSearch, setIsBadSearch] = useState<boolean>(false);
    const [searchByLocation, setSearchByLocation] = useState<string>("");
    const [searchByName, setSearchByName] = useState<string>("");
    const [filterBySpeciality, setFilterBySpeciality] = useState<string>("");
    const [filterByLanguage, setFilterByLanguage] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(Math.round(agents.length/4));
 


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

   

    return (
        <Grid  style={{padding:"25px"}}>
            <Stack style={{paddingTop: {xs:7, md:1}}} direction={DirectionEnum.COLUMN}>
                <Stack style={{width:"100%"}}  >
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
                                            <Typography variant="body1" color="text.primary" 
                                                        sx={{fontWeight:"bold"}} >
                                                Ubicación del agente
                                            </Typography>
                                            <TextField onChange={(event:any)=>
                                            {setIsNew(false);
                                                setSearchByName(event.target.value)}}
                                            color={ColorEnum.SECONDARY}
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
                                            color={ColorEnum.SECONDARY}
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
                    <Stack style={{width:"100%", marginTop: "40px !important"}}>
                        
                        <Grid container style={{width:"100%"}}
                            direction={DirectionEnum.COLUMN}
                            verticalPosition={PositionEnum.SPACING_BETWEEN}>
                                <Grid >
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Typography  variant="h5">Lista de agentes</Typography>
                                </Grid>
                                
                                <Grid  xs={12} md={12} style={{width:"100%"}}
                                direction={DirectionEnum.COLUMN} >
                                    {
                                    agents.slice((page-1)*4, (page-1)*4+4).map((item: Agent_Dto) =>
                                        <CardAgent 
                                        idAgent={item.id}
                                        image={profilePhoto}
                                        maxWidth="100%"
                                        key={item.company_name}
                                        title={item.fullname} 
                                        content={"df"}
                                        nameAgent={item.fullname}
                                        nameCompany={item.company_name}
                                        phoneAgent={item.phone}
                                        emailAgent={item.email} 
                                        cantReviewsAgent={item.cant_reviews}
                                        />
                                    )
                                } 
                                </Grid>
                                
                                <Grid container style={{justifyContent:"center", marginTop: 5}}>
                                     <Pagination page={page} onChange={handleChange}
                                      count={count} />
                                </Grid>
                        
                            
                        </Grid>
                    </Stack>


                }
            
            </Stack>
        </Grid>
    )
}

export default AgentsTemplate;