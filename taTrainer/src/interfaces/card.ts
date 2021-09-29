//export type CardType = string;

export enum CardType {
    TeachingEasy = "Teaching Prompt Round 1", 
    TeachingHard = "Teaching Prompt Round 2", 
    Microagressions = "Microagressions Round"
}

export interface Card{
    ID: number
    kind: CardType
    Prompt: string
    Answer: string
}