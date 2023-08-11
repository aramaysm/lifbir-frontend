import { CheckBoxItemGroup } from "@models";
import { CheckboxesGroup, SimpleDialog } from "@components";
import React from "react";



interface IProps {
    onChangeChecks: (value: CheckBoxItemGroup[]) => void;
    open: boolean;
    onCloseDialog: () => void;
    listOfChecks: CheckBoxItemGroup[];
    
}


const DialogFilterHouse: React.FC<IProps> = ({ onChangeChecks, onCloseDialog, open,listOfChecks }) => {
    

    const dialogContent = 
        <CheckboxesGroup listOfChecks={listOfChecks} onChangeSelection={onChangeChecks} />
    

    return (
        <SimpleDialog open={open} title="Tipo de casas"
            closeHandler={onCloseDialog} maxWidth={"xs"}  >
            {dialogContent} 
        </SimpleDialog>
    )
    
}


export default DialogFilterHouse;
