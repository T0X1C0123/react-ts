import { Box, Container } from "@mui/material";
import { AppBarProgress } from "./ui/AppBarProgress";
import { AnswerOptions } from "./ui/AnswerOptions";
import { Footer } from "./ui/Footer";
import { useState } from "react";

export const Lesson = () => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBarProgress />
            <Container maxWidth="sm" sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', py: 4 }}>
                <AnswerOptions 
                  options={[
                    { id: 1, label: 'Option 1', iconType: 'coffee' },
                    { id: 2, label: 'Option 2', iconType: 'water' },
                    { id: 3, label: 'Option 3', iconType: 'milk' },
                  ]}
                  selectedOption={selectedOption}
                  onOptionSelected={setSelectedOption}
                />
            </Container>
            <Footer />
        </Box>
    );
};