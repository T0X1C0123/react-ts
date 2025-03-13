import { AppBar, Box, LinearProgress } from "@mui/material";

export const AppBarProgress = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1.5 }}>
                <Box sx={{ flexGrow: 1, mx: 1 }}>
                    <LinearProgress variant="determinate" value={50} sx={{ height: 8, borderRadius: 4 }} />
                </Box>
            </Box>
        </AppBar>
    );
};