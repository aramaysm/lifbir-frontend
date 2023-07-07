import React from "react";

import {
    DirectionEnum,
    ImageLayoutEnum,
    ImageObjectFitEnum,
    ImagePlaceholderEnum,
    PositionEnum,
    StyleObject,
} from "@components/types";
import { Box, Grid, Typography, Image } from "@components/index";

interface Props {
    banner: {
        imageProps: { src: string; type?: string; blurDataURL: string };
    };
    styleBox: StyleObject;
    styleGird: StyleObject;
    styleTypography: StyleObject;
    textContent: string;
}

export default function Index({
    banner,
    styleBox,
    styleTypography,
    styleGird,
    textContent,
}: Props) {
    return (
        <Box position="relative" sx={styleBox}>
            <Image
                {...banner.imageProps}
                layout={ImageLayoutEnum.FILL}
                alt={`Header`}
                objectFit={ImageObjectFitEnum.COVER}
                priority
                placeholder={ImagePlaceholderEnum.BLUR}
            />
            <Grid
                container
                direction={DirectionEnum.ROW}
                horizontalPosition={PositionEnum.CENTER}
                verticalPosition={PositionEnum.CENTER}
                style={styleGird}
            >
                <Typography sx={styleTypography}>{textContent}</Typography>
            </Grid>
        </Box>
    );
}