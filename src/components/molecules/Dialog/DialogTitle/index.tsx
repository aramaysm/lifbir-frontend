import React, { FC, ReactElement } from "react";
import MuiDialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { StyleObject } from "@components/types";

interface IProps {
  children: string | ReactElement | ReactElement[] | null;
  style?: StyleObject | null;
  onClose?: () => void | null;
}

const Index: FC<IProps> = ({ children, style, onClose }) => {
    return (
        <MuiDialogTitle sx={style}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

export default Index;