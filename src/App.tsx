import {AppBar, Container, Toolbar, Typography} from '@mui/material';
import {Outlet} from 'react-router';

export default function App() {
    return <>
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    React MUI StarterKit
                </Typography>
            </Toolbar>
        </AppBar>
        <Container sx={{mt: 8}}>
            <Outlet/>
        </Container>
    </>;
}

