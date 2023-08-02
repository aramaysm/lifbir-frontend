import { Divider, Grid, Typography } from "@components";
import { DirectionEnum, PositionEnum } from "@components/types";
import { Rating } from "@mui/material";
import React from "react";
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';

interface IProps {
    opinion:string;
    score: {
        Negociacion: number,
        Conocimiento: number,
        Experiencia: number,
    };
    date: string;
    fullname_user: string;
}


const Index: React.FC<IProps> = ({opinion, score, date, fullname_user}) => {

    const entries = Object.entries(score);

    const calculateGeneralScore = (score.Experiencia + score.Conocimiento 
        + score.Negociacion)/3;

        console.log("Scores: ", entries)

    return (
        <Grid container xs={12} md={12} style={{height:"100%"}}
        direction={DirectionEnum.COLUMN} 
        verticalPosition={PositionEnum.CENTER}>
            <Grid xs={12} md={12}>                                        
                                       <Typography>OPINIONES DE CLIENTES</Typography>
                                    </Grid>
                                    <Grid xs={12} md={12}>
                                        <Divider></Divider>
                                    </Grid>
            <Grid container xs={6} md={12}>
                <Grid  xs={12} md={5} verticalPosition={PositionEnum.CENTER}>
                    <Typography variant="h6">
                        {fullname_user}
                    </Typography>
                </Grid>
                <Grid  xs={12} md={2} verticalPosition={PositionEnum.CENTER}>
                    <Typography verticalPosition={PositionEnum.CENTER}
                     variant="body1" color={"greyText.main"}>
                        {date}
                    </Typography>
                </Grid>
                <Grid xs={12} md={5} horizontalPosition={PositionEnum.END}>
                    
                    <Chip label={(calculateGeneralScore>3 ? "Recomendable  " : "No recomendable  ")+Math.round(calculateGeneralScore) } 
                    style={{backgroundColor:calculateGeneralScore>3 ? "#d3fed0" : "#fcd8af", fontSize:"16px"}}
                    deleteIcon={<StarIcon sx={{color: "orange !important"}}/>}  onDelete={()=>{}}/>

                    
                </Grid>
            </Grid>
            <Grid container xs={12} md={12} style={{marginTop: 2, padding:1}}>
                <Typography variant="body1">
                    {opinion}
                </Typography>
            </Grid>
            <Grid container xs={12} md={12} 
            direction={DirectionEnum.COLUMN}
            style={{marginTop: 2, padding:1}}>
                {
                    
                    entries.map((item) => 
                     {
                         console.log("Item-",item[1])
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
                                    <Rating name="half-rating" 
                                    defaultValue={item[1]} precision={0.5} />
                                    
                                </Grid>
                            </Grid>)
                      }
                    )
                }
            </Grid>
        </Grid>
    )

}

export default Index;

/*
 Array de skills a evaluar:
 -Negociacion
 -Conocimiento
 -Experiencia
*/