import { sortOptions } from "src/components/Programs/Programs";
import { Program } from "src/types";

export default function sortPrograms(sortType : sortOptions, programs : Program[]): Program[]{
    let sortedPrograms = [...programs]

    // alphabetical
    if (sortType === "alphabetical"){
       sortedPrograms.sort((a, b) =>
  a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
);
    }

    // soonest-first
    if (sortType === "soonest-first"){
       sortedPrograms.sort((a, b) => {
  return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
});
    }

    // bestselling
    if (sortType === "bestselling"){
       sortedPrograms.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    }
    

    return sortedPrograms
}