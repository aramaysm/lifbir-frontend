import { FilterHousesSelect, PrecioSelect, TypePropertyHousesSelect } from "@components/templates/Houses/load_data";
import { PositionEnum, DirectionEnum, ColorEnum, TextFieldVariantEnum, TextFieldSizeEnum } from "@components/types";
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack } from "@mui/material";
import React from "react";
import {Grid, TextField, Select} from "@components"
import TuneIcon from "@mui/icons-material/Tune" 
import { useRouter } from 'next/navigation';


interface IProps{
    filtersTypes: [],
}

const Index: React.FC<IProps> = () => {

   const router = useRouter();

    return (
        <Stack style={{width:"100%"}}  >
              <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.CENTER}
                    verticalPosition={PositionEnum.CENTER}
                    style={{width:"100%"}}>
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                                            
                                            <Select label="Seleccionar"
                                                items={FilterHousesSelect}
                                                fullWidth
                                                placeholder="Seleccionar"
                                                variant={TextFieldVariantEnum.OUTLINED}
                                                onChange={(value) => router.push("/houses/"+value) } />
                                            
                                        </Stack>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                                           
                                           <Select label="Precio"
                                                items={PrecioSelect}
                                                fullWidth
                                                placeholder="Seleccionar"
                                                variant={TextFieldVariantEnum.OUTLINED}
                                                onChange={(value) => {}} />
                                            
                                        </Stack>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                                            
                                            <Select label="Tipo de propiedad"
                                                items={TypePropertyHousesSelect}
                                                fullWidth
                                                placeholder="Seleccionar"
                                                variant={TextFieldVariantEnum.OUTLINED}
                                                onChange={(value) => {}}/>
                                            
                                        </Stack>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                                            
                                            <Select label="Habitaciones/Baños"
                                                items={PrecioSelect}
                                                fullWidth
                                                placeholder="Seleccionar"
                                                variant={TextFieldVariantEnum.OUTLINED}
                                                onChange={(value) => {}}/>
                                            
                                        </Stack>
                                    </Grid>
              </Grid>  
        </Stack>
                       
    )
}

export default Index;