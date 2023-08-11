import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { CheckBoxItemGroup } from '@models';

interface IProps {
    listOfChecks: CheckBoxItemGroup[];
    onChangeSelection: (value: CheckBoxItemGroup[]) => void;
}


export default function CheckboxesGroup({listOfChecks,onChangeSelection}:IProps) {

    const [checksState, setChecksState] = React.useState(listOfChecks);
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      
        const newChecks: CheckBoxItemGroup[] = checksState.map((item) => {
            if (item.name === event.target.name)
                item.checked = event.target.checked
            return item;
        }
        )
        
        setChecksState(newChecks);
        onChangeSelection(newChecks);


   
  };

  
 

  return (
   
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
       
        <FormGroup>
            {
                listOfChecks.map((item) =>
                    <FormControlLabel key={item.name}
                        control={<Checkbox checked={item.checked} onChange={handleChange}
                        name={item.name} />}
                    label={item.label}
                />
               )   
            }
          
        </FormGroup>
        
      </FormControl>
     
  );
}
