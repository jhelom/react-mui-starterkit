import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField
} from '@mui/material';

export default function Home() {
    return <>
        <h1>Home</h1>
        <Button>Button</Button>
        <br/>
        <br/>
        <TextField label="TextField"/>
        <br/>
        <br/>
        <FormControl sx={{minWidth: 200}}>
            <InputLabel>Select</InputLabel>
            <Select label="Select">
                <MenuItem>foo</MenuItem>
                <MenuItem>bar</MenuItem>
            </Select>
        </FormControl>
        <br/>
        <br/>
        <RadioGroup defaultValue="foo">
            <Stack>
                <FormControlLabel value="foo" control={<Radio/>} label="foo"/>
                <FormControlLabel value="bar" control={<Radio/>} label="bar"/>
            </Stack>
        </RadioGroup>
        <FormGroup>
            <Stack>
                <FormControlLabel control={<Checkbox defaultChecked/>} label="foo"/>
                <FormControlLabel control={<Checkbox/>} label="bar"/>
            </Stack>
        </FormGroup>
    </>;
}