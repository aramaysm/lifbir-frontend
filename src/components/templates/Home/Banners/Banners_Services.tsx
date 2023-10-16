import React, { FC } from "react";
import imageForSale from "@public/images/homepage/for-sale.svg";
import imageForRent from "@public/images/homepage/select_house.svg";
import imageForPermute from "@public/images/homepage/house_searching.svg";
import {
    Banner,
    Card,
    ContactCard,
    Image,
    Grid,
    Layout,
    SearchContent,
    Stack,
    TextPublicity,
    Typography,
} from "@components";
import { useRouter } from 'next/navigation';
import { cardsServices} from "@components/templates/Home/load_data";
import { DirectionEnum, PositionEnum, TabItem } from "@components/types";
import * as styles_Home from "@components/templates/Home/styles";


export const Banner_Services = () => {

    const router = useRouter();

    return (
        <Stack style={{ padding: 2,marginTop:"25px" }}>
        <Grid
            container
            spacing={2}
            horizontalPosition={PositionEnum.CENTER}
            verticalPosition={PositionEnum.CENTER}
            style={styles_Home.styleGridBanner2}
        >    
             <Grid
                xs={12}
                md={12}
                style={{
                    paddingLeft: "16px !important",
                    paddingRight: "16px !important",
                    textAlign:"center !important",
                    justifyContent:"center !important",
                    alignContent:"center !important",
                }}
                >
                    <Grid container direction={DirectionEnum.ROW} xs={5} md={3}
                     style={styles_Home.stylesContentCenter}>
                        <Typography
                                variant="h4" 
                                sx={{fontWeight:"bold", color:"customGrey.primary"}} >
                                Servicios
                                <hr align="left" style={styles_Home.stylesHR}/>
                        </Typography>
                    </Grid>
                    
                
             </Grid> 
             {
                cardsServices([imageForSale,imageForPermute,imageForRent]).map((item:any)=> 
                    <Grid key={item.title}
                          xs={12}
                          md={4}
                          style={{
                                paddingLeft: "16px !important",
                                paddingRight: "16px !important",
                           }} >
                            <Card handlerButtom={() => router.push(item.link)}
                                buttonBordered={true}
                                title={item.title}
                                content={item.content}
                                textButton={item.textButton}
                                image={item.image}
                                imageSize={{height: 100, width: 100}}	
                                upperCaseContent={true}
                                justifyContentAction={PositionEnum.CENTER}
                            />
                    </Grid>
                )}
              
       </Grid>
    </Stack>

    )

}

