import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export default function MultipleSelectCheckmarks({ onSelectedItem, items, selectLabel }) {
    const [names, setNames] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        const selectedItems = typeof value === 'string' ? value.split(',') : value;
        setNames(selectedItems);
        onSelectedItem(selectedItems);
        // console.log(name)
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">{selectLabel}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={names}
                    onChange={handleChange}
                    input={<OutlinedInput label="Factions" />}
                    renderValue={(selectedItems) => selectedItems.join(', ')}
                    MenuProps={MenuProps}
                >
                    {items.map((name) => (
                        <MenuItem key={name} value={name}>
                            {/* <Checkbox checked={name.indexOf(name) > -1} /> */}
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
