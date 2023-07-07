import styled from "@emotion/styled";

const StyledFooter = styled.footer`
    display: flex;
    flex: 1;
    padding-top: 2rem;
    padding-bottom: 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
    border-radius:50px 50px 0px 0px !important;
    background-color: #d9dbdc;

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        text-decoration: none !important;
    }

`;

export const stylesListItemButton = {
    py: 0,
    "& .MuiListItemText-primary": {
        color: "text.main",
        fontSize: 16,
        fontWeight: "bold",
    },
    ":hover": {
        "& .MuiListItemText-primary": {
        color: "hover.main",
        },
    },
};

export const stylesTextContact = {
    lineHeight: 1.5,
    letterSpacing: 0,
    color: "text.primary",
    fontWeight: "bold",
    fontSize: { xs: 12, md: 16 },
};

export const stylesTextEmail = {
    lineHeight: 1.5,
    letterSpacing: 0,
    color: "text.primary",
    fontWeight: "normal",
    fontSize: { xs: 12, md: 16 },
};

export const stylesButton = {
    backgroundColor: "secondary.main",
    color: "ligthText.main",
    fontSize: "15px",
    borderRadius:"7px ",
    boxShadow: "0 5px 10px 2px rgb(200 10 105 / 20%)",
    textTransform: "none",
    width: "192px",
    "&:hover": {
        transition: "0.5s",
        backgroundColor: "hover.main",
    },
};

export const stylesTextFollowIn = {
    lineHeight: 1.5,
    letterSpacing: 0,
    color: "text.primary",
    fontWeight: "bold",
    fontSize: { xs: 12, md: 16 },
};

export const stylesTextCopyright = {
    fontSize: { xs: 10, md: 12 },
    color: "greyText.main",
    alignSelf: "center",
};

export default StyledFooter;