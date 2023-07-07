import React, { FC } from "react";

import { PositionEnum } from "@components/types";
import { Grid, Typography } from "@components";

interface IProps {
    text: string;
}

const Index: FC<IProps> = ({ text }) => {
    return (
        <Grid
            container
            horizontalPosition={PositionEnum.CENTER}
            verticalPosition={PositionEnum.CENTER}
            style={{ width: "100%", height: "28px", backgroundColor: "quarter.main" }}
        >
            <Typography
                sx={{
                    fontStyle: "italic",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "ligthText.main",
                }}
            >
                {text}
            </Typography>
        </Grid>
    );
};

export default Index;