import React from "react";

import { Box, Grid, Image, Typography } from "@components/index";
import {
    DirectionEnum,
    ImageObjectFitEnum,
    ImagePlaceholderEnum,
    PositionEnum,
} from "@components/types";

interface Props {
    banner: {
        imageProps: { src: string; type?: string; blurDataURL: string };
    };
}

export default function Index({ banner }: Props) {
    return (
        <Box
        position="relative"
        sx={{ height: { xs: 242, sm: 300, md: 548, xl: 648 } }}
        >
        <Image
            {...banner.imageProps}
            alt="Header"
            objectFit={ImageObjectFitEnum.COVER}
            priority
            placeholder={ImagePlaceholderEnum.BLUR}
        />
        <Grid
            container
            direction={DirectionEnum.ROW}
            horizontalPosition={PositionEnum.CENTER}
            verticalPosition={PositionEnum.CENTER}
            style={{
                width: "100%",
                height: "28px",
                position: "absolute",
                top: { xs: 210, sm: 270, md: 520, xl: 620 },
                background: "transparent",
            }}
        >
            <Typography
                sx={{
                    fontStyle: "italic",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "#FCFCFC",
                }}
            >
                {"... no es buscar, es encontrar".toLocaleUpperCase()}
            </Typography>
        </Grid>
        </Box>
    );
}
