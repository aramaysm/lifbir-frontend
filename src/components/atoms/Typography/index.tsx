import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function Index<C extends React.ElementType>(
    props: TypographyProps<C, { component?: C }>
) {
    return <Typography {...props} />;
}