import React from "react";

export enum ButtonSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export enum ButtonVariantEnum {
    CONTAINED = "contained",
    TEXT = "text",
    OUTLINED = "outlined",
}

export enum ImageLayoutEnum {
    FILL = "fill",
    FIXED = "fixed",
    INTRINSIC = "intrinsic",
    RESPONSIVE = "responsive",
}

export enum ImagePlaceholderEnum {
    EMPTY = "empty",
    BLUR = "blur",
}

export enum ImageObjectFitEnum {
    FILL = "fill",
    CONTAIN = "contain",
    COVER = "cover",
    NONE = "none",
    SCALE_DOWN = "scale-down",
}

export enum DirectionEnum {
    ROW = "row",
    ROW_REVERSE = "row-reverse",
    COLUMN = "column",
    COLUMN_REVERSE = "column-reverse",
}

export enum PositionEnum {
    START = "flex-start",
    CENTER = "center",
    END = "flex-end",
    SPACING_BETWEEN = "spacing-between",
    SPACING_AROUND = "spacing-around",
    SPACING_EVENLY = "spacing-evenly",
}

export enum OrientationEnum {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
}

export type ResponsiveDirection = {
    xs?: DirectionEnum;
    sm?: DirectionEnum;
    md?: DirectionEnum;
    lg?: DirectionEnum;
};

export type ResponsivePosition = {
    xs?: PositionEnum;
    sm?: PositionEnum;
    md?: PositionEnum;
    lg?: PositionEnum;
};

export type TabItem = {
    id: number;
    label: string;
};

export enum ColorEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info",
    WARNING = "warning",
    INHERIT = "inherit",
}

export enum TabsVariantEnum {
    STANDARD = "standard",
    SCROLLABLE = "scrollable",
    FULLWIDTH = "fullWidth",
}


export type StyleObject = {
    [index: string]:
    | string
    | number
    | {
        [index: string]: string | number | { [index: string]: string | number};
    }
};

export type AutocompleteState<T> = {
    inputValue: string;
    getOptionLabel: (option: T) => string;
};

export type ReactElementNull = React.ReactElement | null;

export enum PopoverVerticalEnum {
    TOP = "top",
    CENTER = "center",
    BOTTOM = "bottom",
}

export enum PopoverHorizontalEnum {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
}

export type PopoverOrigin = {
    vertical: PopoverVerticalEnum | number;
    horizontal: PopoverHorizontalEnum | number;
};

export enum EdgePosEnum {
    START = "start",
    END = "end",
}

export type Adornment = {
    position: EdgePosEnum;
    adornment: string | React.ReactElement;
};

export enum TextFieldVariantEnum {
    STANDARD = "standard",
    OUTLINED = "outlined",
    FILLED = "filled",
}

export enum BreakpointEnum {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl",
}

export enum SkeletonTypes {
    TEXT = "text",
    RECTANGULAR = "rectangular",
    ROUNDED = "rounded",
    CIRCULAR = "circular",
}

export interface IImageData {
    src: string;
    alt: string;
}

export enum TypeText {
    PASSWORD = "password",
    BUTTON = "button",
    CHECKBOX = "checkbox",
    COLOR = "color",
    DATE = "date",
    DATETIME_LOCAL = "datetime-local",
    EMAIL = "email",
    FILE = "file",
    HIDDEN = "hidden",
    IMAGE = "image",
    MONTH = "month",
    NUMBER = "number",
    RADIO = "radio",
    RANGE = "range",
    RESET = "reset",
    SEARCH = "search",
    SUBMIT = "submit",
    TELF = "tel",
    TEXT = "text",
    TIME = "time",
    URL = "url",
    WEEK = "week",
}

export enum TypeDisplay {
    NONE = "none",
    FLEX = "flex",
    BLOCK = "block",
}

export enum TextFieldSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
}

export enum TypeDataColumn {
    TEXT = "text",
    BUTTON = "button",
    CHECKBOX = "checkbox",
    IMAGE = "image",
    ICON = "icon",
}

export type ColumnTable = {
    id: string,
    type: TypeDataColumn,
    label: string,
}

 