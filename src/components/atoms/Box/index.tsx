import React from "react";
import Box, { BoxProps } from "@mui/material/Box";

export default function Index<C extends React.ElementType>(
  props: BoxProps<C, { component?: C }>
) {
  return <Box {...props} />;
}