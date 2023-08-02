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
    bgImage?: string;
    displayCard?: string;
    styleTitle?: object;
    styleContent?: object;
    styleStack?:object;
    buttonBordered?:boolean;
    upperCaseContent?: boolean;
    imagePositionRight?: boolean;
    imagePositionLeft?: boolean;
    justifyContentAction: string;
}

const Index: FC<Props> = ({
        title,
        content,
        textButton,
        maxWidth,
        height,
        image,
        positionButton,
        bgColor,
        bgImage,
        displayCard,
        styleTitle,
        styleContent,
        styleStack,
        buttonBordered,
        upperCaseContent,
        imagePositionRight,
        imagePositionLeft,
        justifyContentAction,
    }) => {
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

    const imageContent = image ? (
        <Image
            alt={title}
            src={image}
            objectFit={ImageObjectFitEnum.CONTAIN}
            objectPosition={"bottom 24%"}
            layout={ImageLayoutEnum.FILL}
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
                    <Button
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
                    <Button
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
            sx={{
                maxWidth: maxWidth,
                height: height,
                backgroundColor: bgColor,
                backgroundImage:bgImage,
                borderRadius:"20px 0 20px 0",
                display: isSmDown ? "inherint" : displayCard,
                boxShadow: "0 5px 10px 2px rgb(200 10 105 / 50%)",
                "&:hover": {
                    transform: "scale(1.01)",
                    transition: "0.5s",
                    cursor: "pointer",
                },
            }}
        >
            {imagePositionLeft ? (
                <Grid container verticalPosition={PositionEnum.SPACING_BETWEEN}>
                    <Grid xs={12} md={4} style={{ padding: 0 }}>
                        <Box sx={{ height: "200px", margin: 1.5 }} position={"relative"}>
                            {imageContent}
                        </Box>
                    </Grid>
                    <Grid xs={12} md={8}>
                        <CardContent>
                            <Stack 
                            direction={DirectionEnum.COLUMN} spacing={2}>
                                <Typography
                                    variant="h4"
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
            ) : !imagePositionRight ? (
                <>
                    <CardContent>
                        <Box sx={{ height: "200px" }} position={"relative"}>
                            {imageContent}
                        </Box>
                        <Box sx={{ paddingTop: 1 }}>
                            <Stack spacing={2} style={{ alignItems:"center !important"}}
                            direction={DirectionEnum.COLUMN}>
                                <Typography
                                    variant="h6"
                                    sx={styleTitle}>
                                    {title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={styleContent}
                                >
                                    {content}
                                </Typography>
                            </Stack>
                        </Box>
                    </CardContent>
                    {buttonContent}
                </>
            ) : (
                <Grid container verticalPosition={PositionEnum.SPACING_BETWEEN}>
                    <Grid xs={12} md={8}>
                        <CardContent>
                            <Stack 
                             direction={DirectionEnum.COLUMN} spacing={2}>
                                <Typography
                                    
                                    variant="h5"
                                    sx={styleTitle}
                                >
                                    {title.toLocaleUpperCase()}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={styleContent}
                                >
                                    {upperCaseContent ? content.toLocaleUpperCase() : content}
                                </Typography>
                            </Stack>
                        </CardContent>
                        {buttonContent}
                    </Grid>
                    <Grid xs={12} md={4} style={{ padding: 0 }}>
                        <Box sx={{ height: "200px", margin: 1.5 }} position={"relative"}>
                            {imageContent}
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Card>
    );
};

Index.defaultProps = {
    maxWidth: "100%",
    height: "auto",
    positionButton: PositionEnum.CENTER,
    bgColor: "none",
    displayCard: "inherint",
    styleTitle: {color: "white", fontWeight:"bold"},
    styleContent: { color: "white" },
    upperCaseContent: false,
    imagePositionRight: false,
    imagePositionLeft: false,
    justifyContentAction: "center",
};

export default Index;