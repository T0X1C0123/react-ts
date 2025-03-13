import { Box, Button } from "@mui/material";
import { AnswerButton } from "./AnswerButton";

type FooterProps = {
    
};

export const  Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            <AnswerButton variant="contained" color="primary" text="Saltar" />
            <AnswerButton variant="contained" color="success" text="Comprobar" />
        </Box>
    );
};