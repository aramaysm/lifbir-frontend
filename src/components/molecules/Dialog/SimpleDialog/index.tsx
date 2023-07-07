import React, { FC, ReactElement } from "react";
import MuiDialog from "@mui/material/Dialog";
import { Breakpoint } from "@mui/system";

import { DialogActions, DialogContent, DialogTitle } from "@components";

interface IProps {
    open: boolean;
    title: string | ReactElement | null;
    children: ReactElement;
    actions?: ReactElement | null;
    closeHandler: () => void;
    maxWidth: Breakpoint;
    styleDialogTitle?: { [index: string]: string | number } | null;
    styleDialogContent?: { [index: string]: string | number } | null;
    styleDialogActions?: { [index: string]: string | number } | null;
}

const Index: FC<IProps> = ({
    open,
    title,
    children,
    actions,
    closeHandler,
    maxWidth,
    styleDialogTitle,
    styleDialogContent,
    styleDialogActions,
}) => {
    return (
        <MuiDialog open={open} onClose={closeHandler} maxWidth={maxWidth} fullWidth>
            <DialogTitle style={styleDialogTitle} onClose={closeHandler}>
                {title}
            </DialogTitle>
            <DialogContent style={styleDialogContent}>{children}</DialogContent>
            {actions ? (
                <DialogActions style={styleDialogActions}>{actions}</DialogActions>
            ) : null}
        </MuiDialog>
    );
};

Index.defaultProps = {
    maxWidth: "sm",
    title: "",
};

export default Index;