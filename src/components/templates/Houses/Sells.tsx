
import React, { FC} from "react";
import { Sell_House_Dto } from "@models";
import { Stack, Grid,  FilterHouse} from "@components";
import {  DirectionEnum } from "@components/types";
import Houses_Templete from "./Houses_Templete";



interface IProps {
    sells: Sell_House_Dto[];
}

const SellTemplate: FC<IProps> = ({
   sells,
}) => {
   
    const onHandlerFavorite = (id:number) => {
        
        console.log(id);
    }
 

    return (
        <Grid style={{padding:"0px !important", margin:0, width:"100%"}}>
        <Stack style={{width:"100%", padding:0}}
         direction={DirectionEnum.COLUMN}>
           
           <FilterHouse filtersTypes={[]} />
           <Houses_Templete housesList={sells} 
                onChangeFavorite={onHandlerFavorite}
                onHouseClick={function (houseId: number): void {
                    throw new Error("Function not implemented.");
                } }  />
           
        </Stack>
        </Grid>
    )
}

export default SellTemplate;






