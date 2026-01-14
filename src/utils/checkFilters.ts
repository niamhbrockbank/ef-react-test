import { FilterGroup, Program } from "src/types";

export function checkFilters(program : Program, formatFilterStatus : FilterGroup, topicFilterStatus: FilterGroup): boolean {
    const {learningFormats, topic} = program

    if (topicFilterStatus[topic]){
        return true
    }

    for (const format of learningFormats){
        if (formatFilterStatus[format]){
            return true
        }
    }

    return false
}