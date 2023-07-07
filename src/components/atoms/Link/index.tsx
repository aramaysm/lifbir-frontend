import React, { FC } from "react";
import Link from "next/link";

interface IProps {
    children: React.ReactElement | string;
    href: string;
    prefetch?: boolean;
}

const Index: FC<IProps> = ({ children, href, prefetch }) => {
    return (
        <Link href={href} prefetch={prefetch}>
            {children}
        </Link>
    );
};

Index.defaultProps = {
    prefetch: false,
};

export default Index;