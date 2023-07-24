import React, { FC } from "react";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StaticImageData } from "next/image";
import profilePhoto from "@public/images/account/boy_small.png";
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
    imageSize?:any;
    nameAgent: string;
    nameCompany: string;
    phoneAgent:string;
    emailAgent: string;    
    cantReviewsAgent:number;
    scoreAgent: number;
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
        displayCard,
        styleTitle,
        styleContent,
        styleCard,       
        imageSize,
        nameAgent,
        nameCompany,
        phoneAgent,
        emailAgent,  
        cantReviewsAgent,
        scoreAgent,
    }) => {
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

    const imageContent = image ? (
        <Image
            alt={title}
            src={image}
            objectFit={ImageObjectFitEnum.CONTAIN}
            layout={ImageLayoutEnum.RESPONSIVE}
            height={imageSize ? imageSize.height : null}
            width={imageSize ? imageSize.width : null}
            
        />
    ) : null;


    return (
        <Card
            sx={styleCard ===null || styleCard === undefined ? {
                maxWidth: maxWidth,
                height: height,
                backgroundColor: bgColor,
               /* borderRadius:"15px",*/
               borderBottom:"2px solid #eeee",
                marginTop:"15px",
                boxShadow:"none !important",
                display: isSmDown ? "inherint" : displayCard,
                /*boxShadow: "0 5px 10px 2px rgb(0 0 0 / 5%)",*/
                "&:hover": {
                    transform: "scale(1.01)",
                    transition: "0.5s",
                    cursor: "pointer",
                },
            }:styleCard}
        >
           
                <Grid container 
                direction={DirectionEnum.ROW }

                 verticalPosition={PositionEnum.CENTER}>
                    <Grid xs={12} md={2} style={{ padding: 0 }}>
                        <Box sx={{ height: "200px", margin: 1.5 }} position={"relative"}>
                            {imageContent}
                        </Box>
                    </Grid>
                    <Grid xs={12} md={3} style={{ padding: 0 }}>
                      <Grid container 
                          direction={DirectionEnum.COLUMN}
                          verticalPosition={PositionEnum.SPACING_BETWEEN}>
                             <Typography variant="h6"
                              sx={{fontStyle:"italic", fontWeight:"bold"}}>{nameAgent}</Typography>
                         <Typography sx={{fontStyle:"italic"}}>{nameCompany}</Typography>
                        </Grid>
                        
                    </Grid>
                    <Grid xs={12} md={3} style={{ padding: 0 }}>
                      <Grid container 
                          direction={DirectionEnum.COLUMN}
                          verticalPosition={PositionEnum.SPACING_BETWEEN}>
                        </Grid>
                            <Typography variant="body1">{phoneAgent}</Typography>
                            <Typography variant="body1">{emailAgent}</Typography>
                        </Grid>
                    <Grid xs={12} md={4}>
                      <Grid container 
                          direction={DirectionEnum.COLUMN}
                          verticalPosition={PositionEnum.SPACING_BETWEEN}>
                             <Typography>{cantReviewsAgent}</Typography>
                            
                        </Grid>
                    </Grid>
                </Grid>
            
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
};

export default Index;