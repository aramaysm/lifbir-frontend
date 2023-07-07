import React, { FC } from "react";

import { ButtonVariantEnum } from "@components/types";
import { Box, Button, Divider,Image, Typography } from "@components/index";
import {
    stylesBoxContent,
    stylesTextTitle,
    stylesButton,
} from "@components/organisms/TextPublicity/styles";
import image1 from "@public/images/homepage/Home.png";

interface IProps {
    title: string;
    description: string;
    buttonLabel: string;
    imageBG: object;
}

const Index: FC<IProps> = ({ title, description, buttonLabel, imageBG }) => {
    return (
        <Box sx={stylesBoxContent(imageBG)}>
           <Image src={image1} alt="Image" />
            <Box sx={{zIndex:1000}} >
                <Typography sx={stylesTextTitle}>
                    {title.toLocaleUpperCase()}
                </Typography>
            </Box>
           
          
            <Box sx={{ paddingTop: 1, zIndex:1000}}>
                <Typography sx={{ fontSize: 16,color:"white" }}>{description}</Typography>
            </Box>
            <Box
                sx={{
                    paddingTop: 1,
                    alignSelf: "flex-end",
                }}
            >
                <Button
                    label={buttonLabel}
                    variant={ButtonVariantEnum.OUTLINED}
                    style={stylesButton}
                />
            </Box>
            
        </Box>
    );
};

export default Index;