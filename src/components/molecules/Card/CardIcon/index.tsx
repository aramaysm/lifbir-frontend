import React, { FC } from "react";
import { Image, Stack, Grid, Box, Button, Typography } from "@components";
import { ButtonVariantEnum, DirectionEnum, PositionEnum } from "@components/types";
import { stylesButtonGridOutlined } from "@components/templates/Account/styles";



interface IProps{
    icon:any;
    title:string;
    description:string;
    connected: boolean;
    handleButton: (state:boolean) => void;
}

const CardIcon: FC<IProps> = ({
    icon,
    title,
    description,
    connected,
    handleButton,
}) => {


    const handleButtonConex = () => {
        handleButton(!connected);
    }


    return (

        <Grid xs={12} md={11} container spacing={2}>
        <Grid xs={12} md={8}>
        <Grid container>
                                    <Grid style={{padding:1}} xs={12} md={2}>
                                        {icon}
                                    </Grid>
                                    <Grid xs={12} md={10} direction={DirectionEnum.COLUMN}>
                                        <Typography color="text.main" variant="h6">{title}</Typography>
                                        <Typography color="text.main" variant="body1">{connected ? "Conectado":"Desconectado"}</Typography>
                                    </Grid>
                                </Grid>
        </Grid>
        <Grid xs={12} md={4}>
          <Button                               
                  label={connected ? "Conectado":"Desconectado"}
                  variant={ButtonVariantEnum.CONTAINED}
                  style={stylesButtonGridOutlined}
              />
        </Grid>
      </Grid>
    )}


    export default CardIcon;