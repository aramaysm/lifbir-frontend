import React from 'react';
import { useRouter } from 'next/navigation';
import { Pagination } from "@mui/material";


import { Image, Grid, Box, Card_Sell_House} from "@components";
import { ButtonVariantEnum, ColorEnum, DirectionEnum, ImageLayoutEnum,ImageObjectFitEnum, PositionEnum, ReactElementNull, TabItem, TextFieldSizeEnum, TextFieldVariantEnum, TypeDataColumn, TypeText } from "@components/types";
import Typography from '@mui/material/Typography';


interface IProps {
    housesList: any[];
    onHouseClick(houseId:number): void;
    selectedHouse?: number | null;
    onChangeFavorite(houseId:number): void;
}

const Houses_Templete: React.FC<IProps>  = ({housesList, onHouseClick, selectedHouse, onChangeFavorite}) => {

    const [page, setPage] = React.useState<number>(1);
    
    const photo = "https://pixabay.com/get/g86d005bd80326b5c1518c9916276e2dcc27d6d607dcb4c6808116edd86ca6d9c8e6be49ff508cbd462e6b80da50185711ff7d2251dad8f2f56d73600392cd2cf_1280.jpg";

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }


    return (

        <Grid style={{width:"100%"}}>               
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.SPACING_AROUND}
                    style={{display:"flex", justifyContent:"space-around", marginTop:5}}
                >
                    {
                        housesList.slice((page-1)*16, ((page-1)*16)+8).map((item) => {
                            return (
                                <Grid key={item.id} container xs={12} md={3} style={{padding:2}} >
                                  <Card_Sell_House 
                                    start_available={item.start_available ? item.start_available : null}
                                    end_available={item.start_available ? item.start_available : null}
                                    id={item.id}
                                    onChangeFavorite={onChangeFavorite}
                                    type={"Sell"} 
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
                <Box sx={{height:'170px',width:'100% ', marginTop:5}}
                 position={"relative"}>
                    <Image
                    alt={"Foto house"}
                    src={photo}
                    layout={ImageLayoutEnum.FILL}
                    objectFit={ImageObjectFitEnum.COVER}
                    />
                </Box>
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.SPACING_AROUND}
                    style={{display:"flex", justifyContent:"space-around", marginTop:5}}
                >
                    {
                        housesList.slice(((page-1)*16)+8, ((page-1)*16)+16).map((item) => {
                            return (
                                <Grid key={item.id} container xs={12} md={3} style={{padding:2}} >
                                  <Card_Sell_House id={item.id}
                                    onChangeFavorite={onChangeFavorite}
                                    type={"Sell"} 
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
                <Grid
                    container
                    spacing={2}
                    horizontalPosition={PositionEnum.CENTER}
                    style={{marginTop:5}}
                >
                    <Pagination page={page} onChange={handleChangePage}
                                count={Math.ceil(housesList.length/16)} />
                </Grid>
                
            </Grid>
    )
}


export default Houses_Templete;

