import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { Option } from "./AnswerOptions";
import CoffeeIcon from "../icons/CoffeIcon";
import WaterIcon from "../icons/WaterIcon";
import MilkIcon from "../icons/MilkIcon";

type AnswerCardProps = {
    option: Option;
    isSelected: boolean;
    onSelect: () => void;
}

export const AnswerCard = ({ option, isSelected, onSelect }: AnswerCardProps ) => {
    return (
        <Card 
            sx={{ 
              height: '100%', 
              bgcolor: 'background.paper', 
              border: isSelected ? '1px solid blue' : 'none',
              borderRadius: 3, 
              cursor: 'pointer', 
              transition: "border 0.2s", 
            }} 
            onClick={onSelect}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}> 
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    {option.iconType === 'coffee' && <CoffeeIcon />}
                    {option.iconType === 'water' && <WaterIcon />}  
                    {option.iconType === 'milk' && <MilkIcon />}
                </Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    {option.label}
                </Typography>
                <Avatar sx={{ width: 34, height: 34, bgcolor: 'primary.main', color: 'white', fontSize: 14, fontWeight: 'bold' }}>
                    {option.id}
                </Avatar>
            </CardContent>
        </Card>
    );
};