
import React, { FC} from "react";
import { Sell_House_Dto } from "@models";
import { Stack, Grid,  FilterHouse, TextField, SimpleDialog, Typography} from "@components";
import {  ColorEnum, DirectionEnum, TextFieldVariantEnum } from "@components/types";
import Houses_Templete from "./Houses_List_Templete";
import RentFilters from "@/components/organisms/Filter_Houses/rent_filters";
import { Chip } from "@mui/material";



interface IProps {
    houses_list: Sell_House_Dto[];
    type: string;
}

const HousesView: FC<IProps> = ({
    houses_list,
    type,
}) => {
   
     const [openFiltrosDialog, setOpenFiltrosDialog] = React.useState(false);
    const onHandlerFavorite = (id:number) => {
        
        console.log(id);
    }
 

    return (
        <Grid style={{ padding: "0px !important", margin: 0, width: "100%" }}>
            <Grid container xs={12} md={12} style={{width:"100%", padding:0}}
                direction={DirectionEnum.ROW}>
                <Grid xs={12} md={11}>
                    <TextField variant={TextFieldVariantEnum.OUTLINED}
                        fullWidth label={"Direccion"}
                            placeholder="Miramar, La Habana"
                        color={ColorEnum.PRIMARY} />
                </Grid>
                {
                    <Grid xs={12} md={1}>
                        <Chip
                            sx={{
                                                    height: "53px !important",
                                                    fontSize:"16px !important",
                                                    color:"grey",
                                                    borderRadius:"3px !important",
                            }}
                            variant={"outlined"}
                            label="Filtro"
                            onClick={() =>
                            {
                                
                                setOpenFiltrosDialog(true);
                            }} />
                </Grid>
                }
         </Grid>
        <Grid style={{width:"100%", padding:0, marginTop:3}}
         direction={DirectionEnum.COLUMN}>
                {
                    type === "Rent"
                        ?
                        <RentFilters type={type} onChangePrice={function (value: number): void {
                    throw new Error("Function not implemented.");
                } } onChangeTypeProperty={function (value: string): void {
                    throw new Error("Function not implemented.");
                } } onChangeRoomsAndBaths={function (value: number): void {
                    throw new Error("Function not implemented.");
                            }} />
                        :
                        <FilterHouse type={type} onChangePrice={function (value: number): void {
                    throw new Error("Function not implemented.");
                } } onChangeTypeProperty={function (value: string): void {
                    throw new Error("Function not implemented.");
                } } onChangeRoomsAndBaths={function (value: number): void {
                    throw new Error("Function not implemented.");
                } }  />

           }
           
           <Houses_Templete housesList={houses_list} 
                onChangeFavorite={onHandlerFavorite}
                onHouseClick={function (houseId: number): void {
                    throw new Error("Function not implemented.");
                } }  />
           
            </Grid>
            <SimpleDialog open={openFiltrosDialog} title={"Filtros"} closeHandler={function (): void {
                throw new Error("Function not implemented.");
            }} maxWidth={"xs"}  >
                <Typography>Estos son los filtros</Typography>
                </SimpleDialog>
        </Grid>
    )
}

export default HousesView;






