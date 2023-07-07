import React, { ReactElement, ReactNode } from "react";
import { Autocomplete, AutocompleteRenderInputParams } from "@mui/material";

import { StyleObject, TextFieldSizeEnum, AutocompleteState } from '@components/types';

interface IProps<T> {
    id?: string;
    renderInput: (params: AutocompleteRenderInputParams) => ReactNode;
    options: readonly T[];
    style?: StyleObject;
    size: TextFieldSizeEnum;
    autoHighlight?: boolean;
    filterOptions?: (options: T[], state: AutocompleteState<T>) => T[];
    getOptionLabel?: (option: T) => string;
    isOptionEqualToValue?: (option: T, value: T) => boolean;
    renderOption?: (
        props: React.HTMLAttributes<HTMLLIElement>,
        option: T
    ) => ReactElement;
}


export default function Index<T>({
    id,
    renderInput,
    options,
    isOptionEqualToValue,
    style,
    size,
    filterOptions,
    autoHighlight,
    getOptionLabel,
    renderOption,
}: IProps<T> ) {
    return (
        <Autocomplete
                id={id}
                renderInput={renderInput}
                options={options}
                filterOptions={filterOptions}
                isOptionEqualToValue={isOptionEqualToValue}
                sx={style}
                size={size}
                autoHighlight={autoHighlight}
                getOptionLabel={getOptionLabel}
                renderOption={renderOption}
            />
    );
}

Index.defaultProps = {
    autoHighlight: false,
    id: "autocomplete-demo",
}