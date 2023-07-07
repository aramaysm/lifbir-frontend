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
    stylesButton,
    stylesCard,
    stylesCardActions,
    stylesGridButton,
    stylesGridRow
} from "@components/organisms/ContactCard/styles";

interface Props {
    title: string;
    content: string;
    textButton?: string;
    maxWidth?: string;
    height?: string;
    image?: string | StaticImageData;
    positionButton?: PositionEnum;
    bgColor?: string;
    displayCard?: string;
}

const ContactCard: FC<Props> = ({
    title,
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
            alt={title}
            layout={ImageLayoutEnum.FILL}
            objectFit={ImageObjectFitEnum.COVER}
            objectPosition={"bottom 24%"}
        />
    ) : null;

    const buttonContent = textButton ? (
       
            <Grid                
                horizontalPosition={PositionEnum.CENTER}
                xs={12} md={2} style={stylesGridButton} >
                    <Button
                        size={ButtonSizeEnum.LARGE}
                        variant={ButtonVariantEnum.CONTAINED}
                        label={textButton}
                        style={stylesButton}
                    />
               
            </Grid>
        
    ) : null;

    return (
        <Card sx={stylesCard(maxWidth, height, bgColor)}>
            <Grid container style={stylesGridRow}>               
                <Grid xs={12} md={9}>                   
                        <CardContent style={{ height: "90%" }}>
                            <Stack spacing={2} direction={DirectionEnum.COLUMN}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="white"
                                    sx={{fontWeight:"bold"}} >
                                    {title}
                                </Typography>
                                <Typography variant="body1" color="white">
                                    {content}
                                </Typography>
                            </Stack>
                        </CardContent>
                        
                </Grid>  
                    
                {buttonContent}
                                 
            </Grid>
        </Card>
    );
};

ContactCard.defaultProps = {
    maxWidth: "445px",
    height: "auto",
    positionButton: PositionEnum.CENTER,
    bgColor: "none",
    displayCard: "inherint",
};

export default ContactCard;

/*
<Grid xs={12} md={4} style={{ padding: 0 }}>
<Box sx={{ height: "300px", margin: 2 }} position={"relative"}>
    {imageContent}
</Box>
</Grid>
*/