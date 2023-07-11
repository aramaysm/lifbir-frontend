import React, { FC } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";

import { Box, Typography, Stack, Button, Grid} from "@components";
import { ButtonVariantEnum, ColorEnum, DirectionEnum, PositionEnum } from "@components/types";
import {
  stylesButton,
  stylesIcon,
} from "@components/molecules/ConnectThrough/styles";
import { string } from "yup";
import { useRouter } from 'next/navigation';

interface IProps {
    linksToSocialMedia:{
        facebook: string,
        instagram?: string,
        google: string;
    }
}


const Index: FC<IProps> = ({linksToSocialMedia}:IProps) => {

    const { push } = useRouter();

    return (
        <Box sx={{ paddingTop: 2 }}>
            <Stack verticalPosition={PositionEnum.CENTER}>
                <Typography align={"center"}>Conectarse a través de</Typography>
                <Stack direction={DirectionEnum.ROW} spacing={2}>
                    <Grid xs={12} md={6}>
                        <Button clickHandler={()=>push(linksToSocialMedia.facebook)}
                        label="Facebook" startIcon={<FacebookOutlinedIcon />}                        
                        variant={ButtonVariantEnum.OUTLINED} color={ColorEnum.SECONDARY}/>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Button clickHandler={()=>push(linksToSocialMedia.google)} 
                        label="Google" startIcon={<GoogleIcon />}
                        variant={ButtonVariantEnum.OUTLINED} color={ColorEnum.SECONDARY}/>
                    </Grid>
                   
                </Stack>
               
            </Stack>
        </Box>
    );
};

export default Index;