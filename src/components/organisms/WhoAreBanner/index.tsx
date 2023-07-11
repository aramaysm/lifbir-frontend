import React, { FC } from "react";
import Card from "@mui/material/Card";
import { StaticImageData } from "next/image";

import {
    ButtonSizeEnum,
    ButtonVariantEnum,
    DirectionEnum,
    ImageLayoutEnum,
    ImageObjectFitEnum,
    PositionEnum,
} from "@components/types";
import {
    Box,
    Button,
    CardActions,
    CardContent,
    Grid,
    Image,
    Stack,
    Typography,
} from "@components/index";
import {
    stylesCard,
   stylesTitlePrimary, 
   stylesTitleSecondary,
   styleHR,
   styleCardContent,
} from "@components/organisms/WhoAreBanner/styles";

interface Props {
    titlePrimary:string;
    titleSecondary: string;
    content: string;
    textButton?: string;
    maxWidth?: string;
    height?: string;
    image?: string | StaticImageData;
    positionButton?: PositionEnum;
    bgColor?: string;
    displayCard?: string;
}

const WhoAreBanner: FC<Props> = ({
    titlePrimary,
    titleSecondary,
    content,
    textButton,
    maxWidth,
    height,
    image,
    bgColor,
}) => {
    const imageContent = image ? (
        <Image
            src={image}
            alt={titlePrimary+" "+titleSecondary}
            layout={ImageLayoutEnum.FILL}
            objectFit={ImageObjectFitEnum.CONTAIN}
            objectPosition={"bottom 24%"}
        />
    ) : null;

   
    return (
        <Card sx={stylesCard(maxWidth, height, bgColor)}>
            <Grid container style={{ padding: 0 }}>
                <Grid xs={12} md={5} style={{ padding: 0 }}>
                    <Box sx={{ height: "300px" }} position={"relative"}>
                        {imageContent}
                    </Box>
                </Grid>
                <Grid xs={12} md={7}>
                    <Stack verticalPosition={PositionEnum.CENTER} >
                        <CardContent style={styleCardContent}>
                                <Stack direction={DirectionEnum.ROW}
                                style={styleCardContent}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    sx={stylesTitlePrimary}
                                >
                                    {titlePrimary}
                                    <hr align="left" style={styleHR}/>
                                </Typography>
                                
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                     sx={stylesTitleSecondary}
                                >
                                    {titleSecondary}
                                </Typography>
                                </Stack>
                                <Stack spacing={2} direction={DirectionEnum.ROW}>
                                    <Typography variant="h6" color="blackText.main">
                                        {content}
                                    </Typography>
                                </Stack>
                             
                           
                        </CardContent>
                       
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    );
};

WhoAreBanner.defaultProps = {
    maxWidth: "445px",
    height: "auto",
    positionButton: PositionEnum.CENTER,
    bgColor: "none",
    displayCard: "inherint",
};

export default WhoAreBanner;