import React from "react";
import { Carousel as OriginalCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Image } from "@components";
import { IImageData } from "@components/types";

interface IProps {
    centerMode?: boolean;
    displayCount?: number;
    infiniteLoop?: boolean;
    images: IImageData[];
    swipeable?: boolean;
}

export default function Index({
    centerMode,
    displayCount,
    infiniteLoop,
    images,
    swipeable,
}: IProps) {
    const imagesContent = images.map((x, i) => (
        <Image key={i} alt={x.alt} src={x.src} />
    ));
    return (
        <OriginalCarousel
            autoFocus
            swipeable={swipeable}
            stopOnHover
            centerSlidePercentage={displayCount ? 100 / displayCount : undefined}
            centerMode={centerMode}
            autoPlay
            infiniteLoop={infiniteLoop}
            showStatus={false}
            showThumbs={false}
        >
            {imagesContent}
        </OriginalCarousel>
    );
}

Index.defaultProps = {
    centerMode: false,
    displayCount: 1,
    infiniteLoop: true,
    swipeable: true,
};