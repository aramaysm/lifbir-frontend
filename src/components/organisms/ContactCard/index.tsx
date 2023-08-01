import React, { FC,useState } from "react";
import { Image, Stack, Grid, Box, Button, TextField, Card, CardAgent, Divider} from "@components";
import { ButtonVariantEnum, ColorEnum, DirectionEnum, ImageLayoutEnum,ImageObjectFitEnum, PositionEnum, TabItem, TextFieldSizeEnum, TextFieldVariantEnum, TypeText } from "@components/types";
import Typography from '@mui/material/Typography';
import { stylesButtonGridContained, textFieldStyle } from "./styles";


interface IProps {
    onHandleButton: (data:any)=> void;
}

const Index: FC<IProps> = ({ onHandleButton }) => {

    const[name, setName] = useState<string>("");
    const[phone, setPhone] = useState<string>("");
    const[email, setEmail] = useState<string>("");
    const[message, setMessage] = useState<string>("");


    return (
        <Grid style={{border:"1px solid #e1e1e1", borderRadius:"3px",
        backgroundColor: "white"}}
         xs={12} md={12}>
                            <Grid direction={DirectionEnum.COLUMN}
                            horizontalPosition={PositionEnum.CENTER}>
                                <Typography variant="h6" color="text.primary" 
                                            sx={{fontWeight:"bold"}} >
                                   Contactenos
                                </Typography>
                                
                                <Divider style={{marginTop:1}}></Divider>

                                <Grid style={{margin: 2}}
                                direction={DirectionEnum.COLUMN}
                                horizontalPosition={PositionEnum.CENTER}>
                                    <TextField
                                    color={ColorEnum.SECONDARY}
                                    name={"names"}
                                    label={"Nombre"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle}
                                    value={name}
                                    onChange={(event)=> setName(event.target.value)} />

                                    <TextField
                                    color={ColorEnum.SECONDARY}
                                    name={"phone"}
                                    label={"Telefono"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle}
                                    value={phone}
                                    onChange={(event)=> setPhone(event.target.value)} />

                                    <TextField
                                    color={ColorEnum.SECONDARY}
                                    name={"email"}
                                    label={"Correo"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle} 
                                    value={email}
                                    onChange={(event)=> setEmail(event.target.value)}/>

                                    <TextField
                                    color={ColorEnum.SECONDARY}
                                    name={"msg"}
                                    label={"Mensaje (Opcional)"}
                                    variant={TextFieldVariantEnum.OUTLINED}
                                    fullWidth={true}
                                    size={TextFieldSizeEnum.SMALL}
                                    style={textFieldStyle}
                                    multiline
                                    value={message}
                                    onChange={(event)=> setMessage(event.target.value)} />

                                     <Button 
                                     clickHandler={onHandleButton}                              
                                    label={"Enviar"}
                                    variant={ButtonVariantEnum.CONTAINED}
                                    style={stylesButtonGridContained}
                                />
                                </Grid>

                               
                            </Grid>
                           </Grid>
    )

}


export default Index;