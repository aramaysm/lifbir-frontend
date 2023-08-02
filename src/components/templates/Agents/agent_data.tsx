import React, { FC, SyntheticEvent, useState } from "react";
import { Agent_Dto, CountryType } from "@models";
import { Image, Stack, Grid, Box, Button, TextField, Card, CardAgent, ContactCard, Table, ReviewCard} from "@components";
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
} from "@components/templates/Agents/styles"
import { Accordion, AccordionDetails, AccordionSummary, Divider, Pagination, Rating, Tabs, Tab } from "@mui/material";
import Select from "@components/atoms/Select";
import TuneIcon from "@mui/icons-material/Tune";
import { languages, specialities, agents, personalDataAgent1, generalData_Agent, socialMediaAgent, tabs, houses, reviews } from "./load_data";
import imageContactAgent from "@public/images/account/undraw_People_search_re_5rre.png";
import imageNotFound from "@public/images/account/undraw_No_data_re_kwbl.png";
import profilePhoto from "@public/images/account/boy_small.png";
import { useRouter } from 'next/navigation';
import { socialMediaObject } from "@util/social_media_icons";
import { JsxElement } from "typescript";


interface IProps {
    user:any;
    agentData: Agent_Dto
}

const AgentsDataTemplate: FC<IProps> = ({
    user,
    agentData,
}) => {

    const soc_media_keys = Object.keys(socialMediaAgent);
    console.log(soc_media_keys);

    const [isNew, setIsNew] = useState<boolean>(true);
    const [isBadSearch, setIsBadSearch] = useState<boolean>(false);
    const [searchByLocation, setSearchByLocation] = useState<string>("");
    const [searchByName, setSearchByName] = useState<string>("");
    const [filterBySpeciality, setFilterBySpeciality] = useState<string>("");
    const [filterByLanguage, setFilterByLanguage] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(reviews.length);
    const [entries, setEntries ] = useState(Object.entries(generalData_Agent));
    const [entriesPersonalData, setEntriesPersonalData] = 
    useState(Object.entries(personalDataAgent1));
    const [tabSelected, setTabSelected] = useState(0);
    

    const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
        setTabSelected(newValue);
    };

      //console.log(Object.entries(personalDataAgent1))
    

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

    const onContactUs = (data:any) => {
        console.log(data);
    }
    

    return (
        <Grid style={{padding:"0px !important",paddingTop:"25px", margin:0, width:"100%"}}>
        <Stack style={{width:"100%"}}
         direction={DirectionEnum.COLUMN}>
            <Grid  xs={12} md={12}>
                <Breadcrumbs aria-label="breadcrumb">                
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/agents"
                        sx={typograpBreadcrumbs}
                    >
                        Volver atrás
                    </Link>
                    <Typography sx={typograpBreadcrumbs} 
                    color="text.primary">{agentData.fullname}</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid style={{width:"100%"}}  >
                <Grid
                    container horizontalPosition={PositionEnum.CENTER}
                    style={gridContent_AgentData} spacing={2} >
                    <Grid container
                     spacing={3} xs={12} md={9} style={{marginTop: 3}} >
                      <Grid container xs={12} md={4} style={{height:"100%"}} >
                        <Grid style={gridContent}
                        container direction={DirectionEnum.COLUMN}>

                        <Grid xs={12} md={12}>
                            <Box sx={gridImageProfileStyle} position={"relative"}>
                                <Image src={agentData.photo ? agentData.photo : profilePhoto}
                                priority
                                style={imageProfileStyle}
                                alt="Image profile"                            
                                objectFit={ImageObjectFitEnum.CONTAIN} />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={12}>
                            <Grid direction={DirectionEnum.COLUMN}
                            horizontalPosition={PositionEnum.CENTER}
                            style={{textAlign:"center"}}>
                                <Typography variant="h5" color="text.primary" 
                                            sx={{fontWeight:"bold", fontStyle:"italic"}} >
                                    {agentData.fullname}
                                </Typography>
                                <Typography variant="body1" color="text.primary" >
                                    {agentData.company_name}
                                </Typography>
                                <Rating name="half-rating" defaultValue={100/agentData.cant_reviews} precision={0.5} />
                                                        
                            </Grid>
                        </Grid>
                        <Grid  xs={12} md={12}>
                            <Stack style={{width:"100%"}}  >
                                <Grid
                                    container
                                    spacing={2}
                                    horizontalPosition={PositionEnum.CENTER}
                                    verticalPosition={PositionEnum.CENTER}
                                    
                                >
                                    <Grid xs={12} md={12}>
                                        <Divider></Divider>
                                    </Grid>
                                    <>
                                     {entries.map((item) => {
                                        return (

                                            <Grid key={item[0]} 
                                             container
                                             xs={12} md={12} >
                                                <Grid xs={4} md={4}>
                                                    <Typography color="customGrey.main">
                                                     {item[0]+": "}
                                                    </Typography>
                                                </Grid>
                                                <Grid xs={8} md={8}>
                                                    <Typography>
                                                    {item[1]}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                    )
                                    }
                                    
                                           
                                    )
                                    }
                                    </>   
                                   
                                    
                                </Grid>
                            </Stack> 

                        </Grid>
                        <Grid style={{marginTop:2}} xs={12} md={12}>
                            <Stack style={{width:"100%"}}  >
                                <Grid style={{width:"100%"}}
                                    container
                                    horizontalPosition={PositionEnum.CENTER}
                                    verticalPosition={PositionEnum.CENTER}>
                                    <Grid xs={12} md={12}>
                                        <Divider></Divider>
                                    </Grid>
                                    <Grid style={{marginTop:1}}
                                     container xs={12} md={12} 
                                     horizontalPosition={PositionEnum.CENTER}>
                                        <Grid container xs={12} md={10}
                                         horizontalPosition={PositionEnum.CENTER}>
                                         {
                                            soc_media_keys.map((item:string) => {
                                                const socialMedias:any = socialMediaObject(
                                                    ColorEnum.SECONDARY);
                                                return (
                                                     <Grid container key={item} xs={4} md={4}>
                                                        {socialMedias[item] }
                                                     </Grid>
                                                )
                                            })
                                        }
                                        </Grid>
                                       
                                        <Grid container xs={3} md={3}>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Stack>
                          </Grid>
                        </Grid>
                        
                      </Grid>
                      <Grid container xs={12} md={8} style={{height:"100%"}}>
                        <Grid style={gridContent}
                        container direction={DirectionEnum.COLUMN}>
                            <Box style={{width: "100%"}}>
                            <Tabs
                            value={tabSelected}
                            onChange={handleChangeTab}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example">    
                            {
                                tabs.map((item: TabItem) => 
                                    <Tab key={item.id} value={item.id} 
                                    label={`${item.label} (${houses[item.id].length})` } />
                                )
                            }
                            
                            </Tabs>

                        </Box>
                        <Box style={{width: "100%"}}>
                            <Grid>
                                
                                         <Table hasToolbar={false}
                                          columns={[
                                           
                                            {
                                                id: "image",
                                                label:"",
                                                type: TypeDataColumn.IMAGE,
                                            },
                                            {
                                                id: "address",
                                                label:"Direccion",
                                                type: TypeDataColumn.TEXT,
                                            },
                                            {
                                                id: "rooms",
                                                label:"Cuartos",
                                                type: TypeDataColumn.TEXT,
                                            },
                                            {
                                                id: "bathrooms",
                                                label:"Baños",
                                                type: TypeDataColumn.TEXT,
                                            },
                                            {
                                                id: "price",
                                                label:"Precio",
                                                type: TypeDataColumn.TEXT,
                                            },
                                         ]}
                                          onHandleButton={function (data: any): void {
                                            throw new Error("Function not implemented.");
                                        } } 
                                        rows={houses[tabSelected]} 
                                        onChangePage={function (): void {
                                            throw new Error("Function not implemented.");
                                        } } 
                                        onChangeRowsPerPage={function (): void {
                                            throw new Error("Function not implemented.");
                                        } }  />
                                    
                               
                            </Grid>

                        </Box>
                        </Grid>
                        
                       
                      </Grid>
                    </Grid>
                   
                    <Grid container xs={12} md={3} 
                    style={{marginTop: 3}} horizontalPosition={PositionEnum.CENTER} >
                         <ContactCard onHandleButton={onContactUs} />  
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.START}
                    style={gridContent_AgentData}
                >
                    <Grid container
                     spacing={3} xs={12} md={9}  >
                      <Grid container xs={12} md={4} style={{height:"100%"}} >
                        <Grid style={gridContent}
                        container direction={DirectionEnum.COLUMN}>                       
                        
                        <Grid  xs={12} md={12}>
                            <Stack style={{width:"100%"}}  >
                                <Grid
                                    container
                                    spacing={2}
                                    horizontalPosition={PositionEnum.CENTER}
                                    verticalPosition={PositionEnum.CENTER}
                                    
                                >
                                     <Grid xs={12} md={12}>                                        
                                       <Typography>INFORMACION PERSONAL</Typography>
                                    </Grid>
                                    <Grid xs={12} md={12}>
                                        <Divider></Divider>
                                    </Grid>
                                    <>
                                     {entriesPersonalData.map((item) => {
                                        return (

                                            <Grid key={item[0]} 
                                             container
                                             xs={12} md={12} >
                                                <Grid xs={4} md={4}>
                                                    <Typography color="customGrey.main">
                                                     {item[0]+": "}
                                                    </Typography>
                                                </Grid>
                                                <Grid xs={8} md={8}>
                                                    <Typography>
                                                    {item[1]}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                    )
                                    }
                                    
                                           
                                    )
                                    }
                                    </>   
                                   
                                    
                                </Grid>
                            </Stack> 

                        </Grid>
                        </Grid>
                        
                      </Grid>
                      <Grid container xs={12} md={8} style={{height:"100%"}}>
                        <Grid style={gridContent} 
                        horizontalPosition={PositionEnum.CENTER}
                        container direction={DirectionEnum.COLUMN}>

                           <ReviewCard
                            opinion={reviews[page-1].opinion}
                            score={reviews[page-1].score} 
                            date={reviews[page-1].date} 
                            fullname_user={reviews[page-1].fullname_user} />

                             <Pagination page={page} onChange={handleChange}
                                count={count} />
                        </Grid>
                        
                       
                      </Grid>
                    </Grid>
                </Grid>
            </Grid>
           
        </Stack>
        </Grid>
    )
}

export default AgentsDataTemplate;

