import { Box, Divider, Grid, Image, Typography } from "@components";
import React from "react";
import {
    ButtonSizeEnum,
    ButtonVariantEnum,
    DirectionEnum,
    ImageLayoutEnum,
    ImageObjectFitEnum,
    OrientationEnum,
    PositionEnum,
} from "@components/types";
import { BoxImageStyle, ImageStyle, GridPather_CardStyle } from "./styles";
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


interface IProps {
    id: number;
    type: string;   //For rent, sale or buy
    price?: number;
    bedrooms: number;    
    bathrooms: number;
    sqft: number;
    photo: string;
    address: string;
    city: string;
    is_favorite: boolean;
    onChangeFavorite: (id:number) => void;
    start_available?: Date;
    end_available?: Date;
}

const Index:React.FC<IProps> = ({id, type, price, bedrooms, bathrooms, sqft, photo,
   address, city, is_favorite,onChangeFavorite, start_available,end_available }) => {


    return (
        <Grid direction={DirectionEnum.COLUMN}
              style={GridPather_CardStyle} container xs={12} md={12}>
            <Grid xs={12} md={12} style={{padding: 1}}>
                <Box sx={BoxImageStyle}
                 position={"relative"}>
                   <Image style={ImageStyle}
                    alt={"Foto house"}
                    src={photo}
                    layout={ImageLayoutEnum.FILL}
                    objectFit={ImageObjectFitEnum.COVER}
                    />
                </Box>
            </Grid>
            {
              price 
              ?
                <Grid container direction={DirectionEnum.ROW} xs={12} md={12}>
                  <Grid xs={10} md={10}  >
                    <Typography variant="h5" style={{fontWeight:"bold"}}
                                color="text">{"$"+price}</Typography>
                  </Grid>
                 
                  <Grid xs={2} md={2}>
                    {
                    is_favorite ?
                    <FavoriteIcon onClick={() => onChangeFavorite(id)} color="error" />
                    :
                    <FavoriteBorderIcon onClick={() => onChangeFavorite(id)} />
                    }
                  </Grid>
                  
            </Grid>
              :
              <Grid xs={12} md={12}>
                 {
                    is_favorite ?
                   
                    <FavoriteIcon onClick={() => onChangeFavorite(id)} color="error" />
                    :
                    <FavoriteBorderIcon  onClick={() => onChangeFavorite(id)} />
                  }
              </Grid>

            }
            
            <Grid xs={12} md={12}>
                 <Typography variant="h6" style={{fontWeight:"bold"}}
                  color="text">{address}</Typography>
            </Grid>
            <Grid xs={12} md={12}>
                <Typography variant="body2" 
                  color="greyText">{city}</Typography>
            </Grid>
            { start_available 
              ?
              <Grid xs={12} md={12}>
                <Typography variant="body2" 
                  color="greyText">{`${(new Date(start_available)).getDate() } /
                   ${(new Date(start_available)).getMonth()} / ${(new Date(start_available)).getFullYear()} - 
                   ${(new Date(end_available)).getDate() } /
                   ${(new Date(end_available)).getMonth()} / ${(new Date(end_available)).getFullYear()}`}</Typography>
              </Grid>
              :
              <Grid xs={12} md={12}>
                
              </Grid>
            }
            <Grid xs={12} md={12}>
                <Divider></Divider>
            </Grid>
            <Grid container xs={12} md={12}
            style={{display:"flex", justifyContent:"space-around"}} >

                   <Grid container direction={DirectionEnum.ROW} xs={2} md={2}>
                     <HotelIcon />
                     <Typography>{bedrooms}</Typography>                     
                   </Grid>                
                   <Divider orientation={OrientationEnum.VERTICAL}></Divider>
                   <Grid container direction={DirectionEnum.ROW} xs={2} md={2}>
                     <BathtubIcon />
                     <Typography>{bathrooms}</Typography>
                   </Grid>
                   <Divider orientation={OrientationEnum.VERTICAL}></Divider>
                   <Grid container direction={DirectionEnum.ROW} xs={4} md={4}>
                     <SquareFootIcon />
                     <Typography>{sqft}</Typography>
                   </Grid>
            </Grid>
        </Grid>
    )
}

export default Index;