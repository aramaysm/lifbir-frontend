import React, { FC } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import logo from "@public/images/Lifvir-black.png";
import {
    ButtonSizeEnum,
    ButtonVariantEnum,
    DirectionEnum,
    ImageLayoutEnum,
    PositionEnum,
} from "@components/types";
import StyledFooter, {
    stylesButton,
    stylesListItemButton,
    stylesTextContact,
    stylesTextCopyright,
    stylesTextEmail,
    stylesTextFollowIn,
} from "@components/organisms/Footer/styles";
import {
    Box,
    Button,
    Grid,
    Image,
    Link,
    Container,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
} from "@components";
import { MenuModel, SocialModel } from "@models";

const listMenu1: Array<MenuModel> = [
    { id: 1, title: "Quienes somos?", url: "" },
    { id: 2, title: "Terminos y Condiciones", url: "" },
    { id: 3, title: "Metodos de pago", url: "" },
    { id: 4, title: "FAQs", url: "" },
    { id: 5, title: "Privacidad", url: "" },
    { id: 6, title: "Accesibilidad", url: "" },
    { id: 7, title: "Soporte", url: "" },
];

const listMenu2: Array<MenuModel> = [
    { id: 8, title: "Destinos de interes", url: "" },
    { id: 9, title: "Comunicaciones", url: "" },
    { id: 10, title: "Moneda de Cuba", url: "" },
    { id: 11, title: "Encuentra un agente", url: "" },
    { id: 12, title: "Nuestras politicas", url: "" },
];

const listSocialsMedia: Array<SocialModel> = [
    {
        id: 1,
        name: "Facebook",
        icon: <FacebookIcon sx={{ height: "32px", width: "32px" }} />,
        url: "https://www.facebook.com/",
    },
    {
        id: 2,
        name: "instagram",
        icon: <InstagramIcon sx={{ height: "32px", width: "32px" }} />,
        url: "https://www.instagram.com/",
    },
    {
        id: 3,
        name: "Pinterest",
        icon: <PinterestIcon sx={{ height: "32px", width: "32px" }} />,
        url: "https://www.pinterest.es/",
    },
    {
        id: 4,
        name: "Youtube",
        icon: <YouTubeIcon sx={{ height: "32px", width: "32px" }} />,
        url: "https://www.youtube.com/",
    },
];

const Index: FC = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

    let menuContent1;
    let menuContent2;
    if (!isSmDown) {
        menuContent1 = listMenu1.map((l) => (
            <ListItem key={`${l.id}_${l.title}_footerLink`} disablePadding>
                <ListItemButton style={stylesListItemButton}>
                    <Link href={`/${l.url}`} prefetch={false}>
                        <ListItemText primary={l.title} />
                    </Link>
                </ListItemButton>
            </ListItem>
        ));

        menuContent2 = listMenu2.map((l) => (
            <ListItem key={`${l.id}_${l.title}_footerLink`} disablePadding>
                <ListItemButton style={stylesListItemButton}>
                    <Link href={`/${l.url}`} prefetch={false}>
                        <ListItemText primary={l.title} />
                    </Link>
                </ListItemButton>
            </ListItem>
        ));
    } else {
        menuContent1 = listMenu1.map((l) => (
            <ListItem key={`${l.id}_${l.title}_footerLink`} disablePadding>
                <ListItemButton style={stylesListItemButton}>
                    <Link href={`/${l.url}`} prefetch={false}>
                        <ListItemText primary={l.title} />
                    </Link>
                </ListItemButton>
            </ListItem>
        ));

        menuContent2 = listMenu2.map((l) => (
            <ListItem key={`${l.id}_${l.title}_footerLink`} disablePadding>
                <ListItemButton style={stylesListItemButton}>
                    <Link href={`/${l.url}`} prefetch={false}>
                        <ListItemText primary={l.title} />
                    </Link>
                </ListItemButton>
            </ListItem>
        ));
    }

    let socialNetContent = null;
    if (listSocialsMedia) {
        socialNetContent = listSocialsMedia.map((s, index) => (
            <Link key={s.id} href={s.url} prefetch={false}>
                <Box
                        position="relative"
                        height={{ xs: 24, md: 32 }}
                        width={{ xs: 24, md: 32 }}
                        mr={1}
                        ml={index === 0 ? { xs: 0, md: 0 } : { xs: 0, md: 1 }}
                        sx={{
                            "&:hover": {
                                color: "quarter.main",
                            },
                        }}
                    >
                        {s.icon}
                    </Box>
            </Link>
        ));
    }

    return (
        <StyledFooter style={{marginTop:"50px"}}>
            <Container fixed>
                <Grid container style={{ pl: { xs: 1, md: 4 }, pb: 0 }}>
                    <Grid xs={12} md={4}>
                        {menuContent1}
                    </Grid>
                    <Grid xs={12} md={4}>
                        {menuContent2}
                    </Grid>
                    <Grid xs={12} md={4}>
                        <Stack
                            direction={{
                                xs: DirectionEnum.COLUMN,
                                md: DirectionEnum.COLUMN,
                            }}
                            verticalPosition={{
                                xs: PositionEnum.START,
                                md: PositionEnum.START,
                            }}
                            spacing={1}
                            style={{ paddingLeft: 2 }}
                        >
                            <Typography variant="subtitle1" sx={stylesTextContact}>
                                CONTACTO
                            </Typography>
                            <Typography variant="subtitle1" sx={stylesTextEmail}>
                                {"havanarealtors@havanarealtors.com"}
                            </Typography>
                            <Box display="flex" flexDirection="column">
                                <Button
                                    size={ButtonSizeEnum.LARGE}
                                    variant={ButtonVariantEnum.OUTLINED}
                                    label="Enviar mensaje"
                                    style={stylesButton}
                                />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={12} style={{ p: 1 }}>
                        <Stack
                            direction={{ xs: DirectionEnum.ROW, md: DirectionEnum.ROW }}
                            verticalPosition={{
                                xs: PositionEnum.CENTER,
                                md: PositionEnum.START,
                            }}
                            spacing={1}
                            style={{ paddingLeft: 2 }}
                        >
                            <Typography variant="subtitle1" sx={stylesTextFollowIn}>
                                {"Siguenos en"}
                            </Typography>
                            <Box display="flex" flexDirection="row">
                                {socialNetContent}
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={12} style={{ p: 1 }}>
                        <Box bgcolor="primary.main">
                            <Stack
                                direction={{
                                xs: DirectionEnum.COLUMN_REVERSE,
                                md: DirectionEnum.ROW,
                                }}
                                horizontalPosition={PositionEnum.CENTER}
                            >
                                <Stack direction={DirectionEnum.ROW} spacing={2}>
                                    <Box
                                        position="relative"
                                        height={{ xs: 50, md: 50 }}
                                        width={{ xs: 50, md: 50 }}
                                    >
                                        <Image
                                            src={logo}
                                            alt="LIFBIR"
                                            layout={ImageLayoutEnum.FILL}
                                        />
                                    </Box>
                                    <Typography variant="body1" sx={stylesTextCopyright}>
                                        {
                                        "Igualdad de oportinidades (c) Copyright 2021 Havana Realtors LLC"
                                        }
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledFooter>
    );
};

export default Index;
