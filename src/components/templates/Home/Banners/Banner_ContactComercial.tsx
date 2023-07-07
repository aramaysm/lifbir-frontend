import React, { FC } from "react";
import {
    Image,
    Grid,    
    Stack,
    Typography,
    Box,
    CardContent,
    CardActions,
    Button,
    ContactCard,
} from "@components";
import imageContactAgent from "@public/images/homepage/Empresario2.png"
import { ButtonSizeEnum, ButtonVariantEnum, DirectionEnum, ImageLayoutEnum, ImageObjectFitEnum, PositionEnum, TabItem } from "@components/types";
import * as styles_Home from "@components/templates/Home/styles";
import { infoComercialContactBanner } from "@components/templates/Home/load_data";

export const Banner_ContactComercial = () => {
    return (
      <Stack style={styles_Home.styleStackBannerContactComercial}>
        <Grid
        container
        spacing={2}
        horizontalPosition={PositionEnum.CENTER}
        verticalPosition={PositionEnum.CENTER}
        style={styles_Home.styleGridBanner2}
        >
            <Grid container
                xs={12}
                md={12}
                style={{
                    paddingLeft: "16px !important",
                    paddingRight: "16px !important",
                }}
            >
                <ContactCard title={infoComercialContactBanner.title}
                content={infoComercialContactBanner.description}
                textButton={infoComercialContactBanner.textButton}
                maxWidth="100%"
                 />
                
            </Grid>
        </Grid>
    </Stack>
    )
}

/*
  <Grid xs={12} md={5} style={{ padding: 0 }}>
                        <Box sx={{ height: "300px", margin: 1.5 }} position={"relative"}>
                            <Image
                            src={imageContactAgent}
                            alt={"Image"}
                            layout={ImageLayoutEnum.FILL}
                            objectFit={ImageObjectFitEnum.CONTAIN}
                            objectPosition={"bottom 24%"}
                        />
                        </Box>
            </Grid>
*/