import React, { FC } from "react";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StaticImageData } from "next/image";

import theme from "@components/theme";
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
    stylesCardAction,
    stylesCardButton,
    stylesCardButtonBordered,    
} from "@components/molecules/Card/styles";

interface Props {
    title: string;
    content: string;
    textButton?: string;
    handlerButtom?: () => void;
    maxWidth?: string;
    height?: string;
    image?: string | StaticImageData;
    positionButton?: PositionEnum;
    bgColor?: string;
    displayCard?: string;
    styleTitle?: object;
    styleContent?: object;
    styleCard?:object;
    buttonBordered?:boolean;
    upperCaseContent?: boolean;
    imagePositionRight?: boolean;
    imagePositionLeft?: boolean;
    justifyContentAction: string;
    imageSize?:any;
    imageFit?: ImageObjectFitEnum;
}

const Index: FC<Props> = ({
        title,
        content,
        textButton,
        maxWidth,
        height,
        image,
        positionButton,
        handlerButtom,
        bgColor,
        displayCard,
        styleTitle,
        styleContent,
        styleCard,
        buttonBordered,
        upperCaseContent,
        imagePositionRight,
        imagePositionLeft,
        justifyContentAction,
        imageSize,
        imageFit,
    }) => {
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

    const imageContent = image ? (
        <Image
            alt={title}
            src={image}
            layout={ImageLayoutEnum.FILL}
            objectFit={ImageObjectFitEnum.CONTAIN}
            height={imageSize ? imageSize.height : null}
            width={imageSize ? imageSize.width : null}
            
        />
    ) : null;

    const buttonContent = textButton ? 
    buttonBordered ?
    <CardActions style={stylesCardAction(2, justifyContentAction)}>
            <Grid
                container
                horizontalPosition={positionButton}
                verticalPosition={PositionEnum.CENTER}
            >
                <Grid md={imagePositionRight ? 4 : 12}>
                    <Button clickHandler={handlerButtom}
                        size={ButtonSizeEnum.LARGE}
                        variant={ButtonVariantEnum.OUTLINED}
                        label={textButton}
                        style={buttonBordered ? stylesCardButtonBordered : stylesCardButton}
                    />
                </Grid>
            </Grid>
        </CardActions>
        : (
        <CardActions style={stylesCardAction(2, justifyContentAction)}>
            <Grid
                container
                horizontalPosition={positionButton}
                verticalPosition={PositionEnum.CENTER}
            >
                <Grid md={imagePositionRight ? 4 : 12}>
                    <Button clickHandler={handlerButtom}
                        size={ButtonSizeEnum.LARGE}
                        variant={ButtonVariantEnum.OUTLINED}
                        label={textButton}
                        style={buttonBordered ? stylesCardButtonBordered : stylesCardButton}
                    />
                </Grid>
            </Grid>
        </CardActions>
    ) : null;

    return (
        <Card
            sx={styleCard ===null || styleCard === undefined ? {
                maxWidth: maxWidth,
                height: height,
                backgroundColor: bgColor,
                borderRadius:"15px",
                display: isSmDown ? "inherint" : displayCard,
                boxShadow: "0 5px 10px 2px rgb(0 0 0 / 5%)",
                "&:hover": {
                    transform: "scale(1.01)",
                    transition: "0.5s",
                    cursor: "pointer",
                },
            }:styleCard}
        >
            {imagePositionLeft || imagePositionRight ? (
                <Grid container 
                direction={imagePositionLeft ? DirectionEnum.ROW : DirectionEnum.ROW_REVERSE}
                 verticalPosition={PositionEnum.SPACING_BETWEEN}>
                    <Grid xs={12} md={5} style={{ padding: 0 }}>
                        <Box sx={{ height: "200px", margin: 1.5 }} position={"relative"}>
                            {imageContent}
                        </Box>
                    </Grid>
                    <Grid xs={12} md={7}>
                        <CardContent>
                            <Stack direction={DirectionEnum.COLUMN} spacing={2}>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    component="div"
                                    sx={styleTitle}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="text.secondary"
                                    sx={styleContent}
                                >
                                    {content}
                                </Typography>
                            </Stack>
                        </CardContent>
                        {buttonContent}
                    </Grid>
                </Grid>
            ) :  (
                <Grid container 
                direction={DirectionEnum.ROW }
                 verticalPosition={PositionEnum.CENTER}
                 style={{justifyContent:"center"}}>
                    <Grid xs={12} md={7} style={{ padding: 0 }}>
                        <Box sx={{ height: "200px", margin: 1.5 }} position={"relative"}>
                            {imageContent}
                        </Box>
                    </Grid>
                    <Grid xs={12} md={7}>
                    <CardContent>                       
                            <Grid 
                             direction={DirectionEnum.COLUMN}>
                                <Grid style={{textAlign:"center"}}>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    sx={styleTitle}
                                >
                                    {title}
                                </Typography>
                                </Grid>
                                <Grid style={{padding:0}}>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={styleContent}
                                >
                                    {content}
                                </Typography>
                                </Grid>
                                
                            </Grid>
                       
                    </CardContent>
                    {buttonContent}
                </Grid>
                </Grid>
            ) }
        </Card>
    );
};

Index.defaultProps = {
    maxWidth: "100%",
    height: "auto",
    positionButton: PositionEnum.CENTER,
    bgColor: "none",
    displayCard: "inherint",
    styleTitle: {color: "text.main", fontWeight:"bold"},
    styleContent: { color: "blackText.main" },    
    upperCaseContent: false,
    imagePositionRight: false,
    imagePositionLeft: false,
    justifyContentAction: "center",
};

export default Index;