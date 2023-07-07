import React, { FC, MouseEvent, ReactElement, useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import MenuIcon from "@mui/icons-material/Menu";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import {
    ButtonSizeEnum,
    ButtonVariantEnum,
    ColorEnum,
    ImageLayoutEnum,
    PopoverHorizontalEnum,
    PopoverVerticalEnum,
    TypeDisplay,
} from "@components/types";
import {
    Box,
    Button,
    Container,
    IconButton,
    Image,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from "@components";
import {
    styleIconButton,
    styleIcon,
    styleMenuItem,
    stylesBoxImage,
} from "@components/organisms/Navbar/styles";
import { useRouter } from 'next/navigation';

interface IProps {
    enterAnchorEl?: null | HTMLElement;
    handleEnterMenuOpen?: (event: MouseEvent<HTMLElement>) => void;
    handleEnterMenuClose: (target?: string) => void;
}

export const Index: FC<IProps> = ({
    enterAnchorEl,
    handleEnterMenuOpen,
    handleEnterMenuClose,
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const { push } = useRouter();
    const [isLogin] = useState(true);

    const accountMenuOpenHandler = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const accountMenuCloseHandler = () => {
        setAnchorEl(null);
    };

    const handlerSignOutSubmit = () => {
        console.log(`signOutSubmitHandler`);
        accountMenuCloseHandler();
    };

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const onHandleButtonMenu = (rute:string) => {
        push(rute);
    }

    let renderMenu: ReactElement;
    let accountActionHandler;
    let menuId;
    if (isLogin) {
        menuId = "primary-search-enter-menu";
        accountActionHandler = accountMenuOpenHandler;
        renderMenu = (
            <>
                <Box sx={{ flexGrow: 1, backgroundColor:"white",display: { xs: "flex", md: "none" } }}>
                    <IconButton
                        size={ButtonSizeEnum.LARGE}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        clickHandler={handleOpenNavMenu}
                        color={ColorEnum.PRIMARY}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id={menuId}
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: PopoverVerticalEnum.BOTTOM,
                            horizontal: PopoverHorizontalEnum.LEFT,
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: PopoverVerticalEnum.TOP,
                            horizontal: PopoverHorizontalEnum.LEFT,
                        }}
                        closeHandler={handleCloseNavMenu}
                        style={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        <MenuItem clickHandler={handleCloseNavMenu}>
                            <Button
                                clickHandler={()=>onHandleButtonMenu("/travels")}
                                style={{ p: 1 }}
                                variant={ButtonVariantEnum.TEXT}
                                label="Viajes"
                                startIcon={<WorkIcon color="action" />}
                                color={ColorEnum.INHERIT}
                            />
                        </MenuItem>
                        <MenuItem clickHandler={handleCloseNavMenu}>
                            <Button
                                clickHandler={()=>onHandleButtonMenu("/favorites")}
                                label="Favoritos"
                                variant={ButtonVariantEnum.TEXT}
                                style={{ p: 1 }}
                                startIcon={<FavoriteBorderIcon color="action" />}
                                color={ColorEnum.INHERIT}
                            />
                        </MenuItem>
                        <MenuItem clickHandler={handleCloseNavMenu}>
                            <Button
                                clickHandler={()=>onHandleButtonMenu("/messages")}
                                label="Mensajes"
                                variant={ButtonVariantEnum.TEXT}
                                style={{ p: 1 }}
                                startIcon={<ForumOutlinedIcon color={"action"} />}
                                color={ColorEnum.INHERIT}
                            />
                        </MenuItem>
                        <MenuItem clickHandler={handleCloseNavMenu}>
                            <Button
                               clickHandler={()=>onHandleButtonMenu("/notifications")}
                                label="Notificaciones"
                                variant={ButtonVariantEnum.TEXT}
                                style={{ p: 1 }}
                                startIcon={<NotificationsIcon color={"action"} />}
                                color={ColorEnum.INHERIT}
                            />
                        </MenuItem>
                        <MenuItem clickHandler={handleCloseNavMenu}>
                            <Button
                                label="Lenguaje"
                                variant={ButtonVariantEnum.TEXT}
                                style={{ p: 1 }}
                                startIcon={<GTranslateOutlinedIcon color={"action"} />}
                                color={ColorEnum.INHERIT}
                            />
                        </MenuItem>
                    </Menu>
                </Box>
                <Box sx={stylesBoxImage(TypeDisplay.FLEX, TypeDisplay.NONE)}>
                    <Image
                        src="/images/LOGO_UNIDO_pink.svg"
                        alt="LIFVIR"
                        layout={ImageLayoutEnum.INTRINSIC}
                        width={150}
                        height={65}
                    />
                </Box>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                    <Tooltip title="Viajes">
                        <IconButton style={styleIconButton} color={ColorEnum.INHERIT}>
                            <WorkIcon sx={styleIcon} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Favoritos">
                        <IconButton style={styleIconButton} color={ColorEnum.INHERIT}>
                            <FavoriteBorderIcon sx={styleIcon} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Mensajes">
                        <IconButton style={styleIconButton} color={ColorEnum.INHERIT}>
                            <ForumOutlinedIcon sx={styleIcon} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notificaciones">
                        <IconButton style={styleIconButton} color={ColorEnum.INHERIT}>
                            <NotificationsIcon sx={styleIcon} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Lenguaje">
                        <IconButton style={styleIconButton} color={ColorEnum.INHERIT}>
                            <GTranslateOutlinedIcon sx={styleIcon} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box style={{ flexGrow: 0 }}>
                <Tooltip title="Perfil">
                    <IconButton
                        clickHandler={accountActionHandler}
                        style={styleIconButton}
                        color={ColorEnum.PRIMARY}
                    >
                        <PersonRoundedIcon sx={styleIcon} />
                    </IconButton>
                </Tooltip>
                <Menu
                    style={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: PopoverVerticalEnum.TOP,
                        horizontal: PopoverHorizontalEnum.RIGHT,
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: PopoverVerticalEnum.TOP,
                        horizontal: PopoverHorizontalEnum.RIGHT,
                    }}
                    closeHandler={accountMenuCloseHandler}
                >
                    <MenuItem key={"cuenta"} style={styleMenuItem}
                    clickHandler={()=>onHandleButtonMenu("/account")}>
                        {/*clickHandler={handleCloseUserMenu}*/}
                        <Typography textAlign="center">{"Cuenta"}</Typography>
                    </MenuItem>
                    <MenuItem
                        key={"cerrar-esion"}
                        style={styleMenuItem}
                        clickHandler={handlerSignOutSubmit}
                    >
                        <Typography textAlign="center">{"Cerrar Sesión"}</Typography>
                    </MenuItem>
                </Menu>
                </Box>
            </>
        );
    } else {
        menuId = "primary-search-account-menu";
        accountActionHandler = handleEnterMenuOpen;
        renderMenu = (
            <>
                <Box sx={{ flexGrow: 1, backgroundColor:"white", display: { xs: "flex", md: "none" } }}>
                    <IconButton
                        size={ButtonSizeEnum.LARGE}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        clickHandler={handleOpenNavMenu}
                        color={ColorEnum.SECONDARY}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id={menuId}
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: PopoverVerticalEnum.BOTTOM,
                            horizontal: PopoverHorizontalEnum.LEFT,
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: PopoverVerticalEnum.TOP,
                            horizontal: PopoverHorizontalEnum.LEFT,
                        }}
                        closeHandler={handleCloseNavMenu}
                        style={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        <MenuItem clickHandler={handleCloseNavMenu}>
                            <Button
                                label="Lenguaje"
                                variant={ButtonVariantEnum.TEXT}
                                style={{ p: 1 }}
                                startIcon={<GTranslateOutlinedIcon color={"action"} />}
                                color={ColorEnum.INHERIT}
                            />
                        </MenuItem>
                    </Menu>
                </Box>
                <Box sx={stylesBoxImage(TypeDisplay.FLEX, TypeDisplay.NONE)}>
                    <Image
                        src="/images/LOGO_UNIDO_pink.svg"
                        alt="LIFVIR"
                        layout={ImageLayoutEnum.INTRINSIC}
                        width={150}
                        height={65}
                    />
                </Box>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                    <Tooltip title="Lenguaje">
                        <IconButton style={styleIconButton} color={ColorEnum.INHERIT}>
                            <GTranslateOutlinedIcon sx={styleIcon} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box style={{ flexGrow: 0 }}>
                    <Tooltip title="Perfil">
                        <IconButton
                        clickHandler={accountActionHandler}
                        style={styleIconButton}
                        color={ColorEnum.INHERIT}
                        >
                            <PersonRoundedIcon sx={styleIcon} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        style={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={enterAnchorEl}
                        anchorOrigin={{
                            vertical: PopoverVerticalEnum.TOP,
                            horizontal: PopoverHorizontalEnum.RIGHT,
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: PopoverVerticalEnum.TOP,
                            horizontal: PopoverHorizontalEnum.RIGHT,
                        }}
                        closeHandler={() => handleEnterMenuClose()}
                    >
                        <MenuItem
                            key={"inicio-sesion"}
                            clickHandler={() => handleEnterMenuClose("l")}
                            style={styleMenuItem}
                        >
                            <Typography textAlign="center">{"Inicio de Sesión"}</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </>
        );
    }

    return (
        <>
            <AppBar
                position={"absolute"}
                sx={{ background: "white", boxShadow: "0 5px 10px 2px rgb(200 10 105 / 15%)" }}
            >
                <Container style={{ width: "100%" }} maxWidth={false}>
                    <Toolbar disableGutters>
                        <Box sx={stylesBoxImage(TypeDisplay.NONE, TypeDisplay.FLEX)}>
                            <Image
                                src="/images/LOGO_UNIDO_pink.svg"
                                alt="LIFVIR"
                                layout={ImageLayoutEnum.INTRINSIC}
                                width={150}
                                height={65}
                            />
                        </Box>
                        {renderMenu}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Index;