export interface Program {
    id : number,
    title: string,
    topic: string,
    learningFormats: string[],
    bestseller: boolean,
    startDate: string,
}

export type FilterGroup = Record<string, boolean>