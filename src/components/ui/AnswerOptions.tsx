import Grid from '@mui/material/Grid2';
import { AnswerCard } from './AnswerCard';

export type Option = {
    id: number;
    label: string;
    iconType: 'coffee' | 'water' | 'milk';
};

type AnswerOptionsProps = {
    options: Option[];
    selectedOption: number | null;
    onOptionSelected: (optionId: number) => void;
};

export const AnswerOptions = ({ options, selectedOption, onOptionSelected }: AnswerOptionsProps) => {
    return (
        <Grid container spacing={2}>
            {options.map((option) => (
                <Grid size={{ xs: 4, md: 4 }} key={option.id}>
                    <AnswerCard 
                        option={option}
                        isSelected={option.id === selectedOption}
                        onSelect={() => onOptionSelected(option.id)}
                    />
                </Grid>
            ))}
        </Grid>
    );
};