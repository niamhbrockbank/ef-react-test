import { FilterGroup } from "src/types";

    export default function clearAllFilters(prevStatus: FilterGroup) {
      const filters = Object.keys(prevStatus);
      const allFalse = filters.map((f) => [f, false]);
      const newStatus = Object.fromEntries(allFalse) as FilterGroup;

      return newStatus;
    }