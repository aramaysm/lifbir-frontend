import React, { FC } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

import { Box, Typography, Stack, Button } from "@components";
import { DirectionEnum, PositionEnum } from "@components/types";
import {
  stylesButton,
  stylesIcon,
} from "@components/molecules/ConnectThrough/styles";

const Index: FC = () => {
    return (
        <Box sx={{ paddingTop: 2 }}>
            <Stack verticalPosition={PositionEnum.CENTER}>
                <Typography align={"center"}>Conectarse a través de</Typography>
                <Stack direction={DirectionEnum.ROW} spacing={2}>
                    <FacebookIcon sx={stylesIcon} />
                    <GoogleIcon sx={stylesIcon} />
                   
                </Stack>
               
            </Stack>
        </Box>
    );
};

export default Index;