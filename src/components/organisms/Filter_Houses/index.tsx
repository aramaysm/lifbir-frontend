import { FilterHousesSelect, PrecioSelect, TypePropertyHousesSelect } from "@components/templates/Houses/load_data";
import { PositionEnum, DirectionEnum, ColorEnum, TextFieldVariantEnum, TextFieldSizeEnum, ButtonVariantEnum, ButtonSizeEnum } from "@components/types";
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack, Chip } from "@mui/material";
import React from "react";
import {Grid, TextField, Select, DialogFilterHouse, Button} from "@components"
import TuneIcon from "@mui/icons-material/Tune" 
import { useRouter } from 'next/navigation';
import { CheckBoxItemGroup } from "@models";
import { listOfTypeHouses,listOfBathrooms } from "./load_data";

interface IProps{
    type: string;
    onChangePrice: (value:number) => void;
    onChangeTypeProperty: (value:string) => void;
    onChangeRoomsAndBaths: (value:number) => void;
}

const Index: React.FC<IProps> = ({
    onChangePrice,
    onChangeTypeProperty,
    onChangeRoomsAndBaths,
}) => {

    const router = useRouter();
    const [openHousesTypeDialog, setOpenHousesTypeDialog] = React.useState(false);
    const listOfFilters:any = {
        bathrooms: listOfBathrooms,
        houseTypes: listOfTypeHouses,
    }

    const [filterSelected, setFilterSelected] = React.useState('');

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
                                                onChange={(value) => {onChangePrice(Number(value))}} />
                                            
                                        </Stack>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                        <Chip
                            sx={{
                                                    height: "53px !important",
                                                    fontSize:"16px !important",
                                                    color:"grey",
                                                    borderRadius:"3px !important",
                            }}
                            variant={"outlined"}
                            label="Tipos de casas"
                            onClick={() =>
                            {
                                setFilterSelected('houseTypes');
                                setOpenHousesTypeDialog(true);
                            }} />
                                            
                                                                
                                        </Stack>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Stack direction={DirectionEnum.COLUMN}>
                                            <Chip
                            sx={{
                                                    height: "53px !important",
                                                    fontSize:"16px !important",
                                                    color:"grey",
                                                     borderRadius:"3px !important",
                            }}
                            variant={"outlined"}
                            label="Habitaciones/Baños"
                            onClick={() =>
                            {
                                setFilterSelected('bathrooms');
                                setOpenHousesTypeDialog(true);
                            }} />
                                               </Stack>
                                    </Grid>
            </Grid> 
            <DialogFilterHouse listOfChecks={listOfFilters[filterSelected]}
                onCloseDialog={() => setOpenHousesTypeDialog(false)}
                onChangeChecks={function (value: CheckBoxItemGroup[]): void {
                console.log("Function not implemented.");
            } } open={openHousesTypeDialog} />
        </Stack>
                       
    )
}

export default Index;