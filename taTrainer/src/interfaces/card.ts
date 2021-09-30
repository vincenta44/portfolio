//export type CardType = string;

export enum CardKind {
    TeachingEasy = "Teaching Prompt Round 1", 
    TeachingHard = "Teaching Prompt Round 2", 
    Microagressions = "Microagressions Round"
}

export interface Card{
    ID: number
    Kind: CardKind
    prompt: string
    Answer: string
}