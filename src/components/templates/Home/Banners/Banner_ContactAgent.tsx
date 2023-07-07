import React, { FC } from "react";
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
    Box,
    CardContent,
    CardActions,
    Button,
} from "@components";
import imageContactAgent from "@public/images/homepage/Empresario2.png"
import { ButtonSizeEnum, ButtonVariantEnum, DirectionEnum, ImageLayoutEnum, ImageObjectFitEnum, PositionEnum, TabItem } from "@components/types";
import * as styles_Home from "@components/templates/Home/styles";
import {infoAgentContactBanner } from "@components/templates/Home/load_data";



export const Banner_ContactAgent = () => { 

    return (
        <Stack style={styles_Home.styleStackBannerContactAgent} >
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
                        }}
                    >
                        <Grid container 
                        direction={DirectionEnum.ROW}
                       verticalPosition={PositionEnum.SPACING_BETWEEN}>
                    <Grid xs={12} md={5} style={{ padding: 0 }}>
                        <Box sx={{ height: "300px" }} position={"relative"}>
                            <Image
                            src={imageContactAgent}
                            alt={"Image"}
                            layout={ImageLayoutEnum.FILL}
                            objectFit={ImageObjectFitEnum.CONTAIN}
                            objectPosition={"bottom 24%"}
                        />
                        </Box>
                    </Grid>
                    <Grid xs={12} md={7}>
                        <CardContent>
                            <Stack direction={DirectionEnum.COLUMN} spacing={2}>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    component="div"
                                    sx={styles_Home.styleTitleCard}
                                >
                                    {infoAgentContactBanner.title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="text.secondary"
                                    sx={styles_Home.styleContentCard}
                                >
                                    {infoAgentContactBanner.description}
                                </Typography>
                            </Stack>
                        </CardContent>
                        <CardActions>
                        <Grid
                container
                verticalPosition={PositionEnum.CENTER}
            >
                <Grid md={4}>
                    <Button
                        size={ButtonSizeEnum.LARGE}
                        variant={ButtonVariantEnum.OUTLINED}
                        label={infoAgentContactBanner.textButton}
                        style={styles_Home.styleCardButton("hover.main")}
                    />
                </Grid>
            </Grid>
                        </CardActions>
                    </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Stack>

    )
}