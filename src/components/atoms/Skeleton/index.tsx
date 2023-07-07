import React from "react";
import MuiSkeleton from "@mui/material/Skeleton";

import { SkeletonTypes } from "@components/types";

interface Props {
    variant?: SkeletonTypes;
    height: number;
    width: string | number;
}

export default function Index({ variant, height, width }: Props) {
    return <MuiSkeleton variant={variant} height={height} width={width} />;
}

Index.defaultProps = {
    variant: SkeletonTypes.TEXT,
    height: 56,
};