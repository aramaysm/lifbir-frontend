import React, { FC } from "react";

import { CountryType } from "@models";
import {
    ColorEnum,
    ImageLayoutEnum,
    StyleObject,
    TextFieldSizeEnum,
    TextFieldVariantEnum,
} from "@components/types";
import { AutoComplete, Box, Image, TextField } from "@components";

interface IProps {
    countries: readonly CountryType[];
    labelAutoComplete: string;
    style: StyleObject;
    size: TextFieldSizeEnum;
}

const Index: FC<IProps> = ({ countries, labelAutoComplete, style, size }) => {
    return (
        <AutoComplete
            id="country-select-demo"
            style={style}
            size={size}
            options={countries}
            autoHighlight
            filterOptions={(options, state) => {
                if (state.inputValue) {
                    return options.filter(
                        (x) =>
                        x.label.toLowerCase().includes(state.inputValue.toLowerCase()) ||
                        x.phone ===
                            (state.inputValue.includes("+")
                                ? state.inputValue
                                : `+${state.inputValue}`)
                    );
                }
                return options;
            }}
            getOptionLabel={(option: CountryType) => option.phone}
            renderOption={(props, option: CountryType) => (
                <Box
                    component="li"
                    sx={{ "& > div": { mr: 1, flexShrink: 0 } }}
                    {...props}
                    key={option.id}
                >
                    <Box display="inline-flex">
                        <Image
                            width={20}
                            height={20}
                            src={option.flag}
                            alt="flag"
                            layout={ImageLayoutEnum.FIXED}
                        />
                    </Box>
                    {option.label} ({option.code}) {option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                color={ColorEnum.PRIMARY}
                    {...params}
                    size={
                        params.size === "small"
                        ? TextFieldSizeEnum.SMALL
                        : TextFieldSizeEnum.MEDIUM
                    }
                    label={labelAutoComplete}
                    fullWidth
                    variant={TextFieldVariantEnum.OUTLINED}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
};

export default Index;