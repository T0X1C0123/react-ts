import { Button } from "@mui/material";

type AnswerButtonProps = {
    variant?: 'outlined' | 'contained';
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
    text: string;
    onClick?: () => void;
};

export const AnswerButton = ({ variant, color, text, onClick }: AnswerButtonProps) => {
    return (
        <Button 
            variant={variant} 
            color={color} 
            onClick={onClick} 
            sx={{ 
              color: 'white', 
              fontWeight: 'bold', 
              borderRadius: 4, 
              px: 4 
            }}
        >
          {text}
        </Button>
    );
};
