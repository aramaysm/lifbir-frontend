import React, { FC } from "react";
import Image, { StaticImageData } from "next/legacy/image";

import {
    ImageLayoutEnum,
    ImageObjectFitEnum,
    ImagePlaceholderEnum,
} from "@components/types";

interface IProps {
    alt: string;
    src: string | StaticImageData;
    height?: number | string;
    layout?: ImageLayoutEnum;
    placeholder?: ImagePlaceholderEnum;
    priority?: boolean;
    objectFit?: ImageObjectFitEnum;
    objectPosition?: string;
    width?: string | number;
    blurDataURL?: string;
    style?:object;
}

const Index: FC<IProps> = ({
    alt,
    src,
    placeholder,
    priority,
    height,
    objectFit,
    objectPosition,
    layout,
    width,
    blurDataURL,
    style,
}) => {
    let sizeProps = {};
    if (layout !== ImageLayoutEnum.FILL) {
        sizeProps = {
            height,
            width,
        };
    }
    return (
        <Image
            style={style}
            blurDataURL={blurDataURL}
            alt={alt}
            src={src}
            priority={priority}
            layout={layout}
            objectFit={objectFit}
            objectPosition={objectPosition}
            placeholder={placeholder}
            {...sizeProps}
        />
    );
};

Index.defaultProps = {
    layout: ImageLayoutEnum.FILL,
    priority: false,
    placeholder: ImagePlaceholderEnum.EMPTY,
};

export default Index;