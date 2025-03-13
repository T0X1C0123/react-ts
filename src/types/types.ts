export type Question = {
    id: number;
    text: string;
    correctOptionId: number;
    options: Option[];
    isNew?: boolean;
}

export type Option = {
    id: number;
    label: string;
    iconType: 'coffee' | 'water' | 'milk';
}