import { useState } from "react";
import { sortOptions } from "../Programs";
import DownChevron from "./DownChevron";
import * as styles from "./SortBy.css";

const dropdownOptions: { id: sortOptions; label: string }[] = [
  { id: "alphabetical", label: "Courses A to Z" },
  { id: "soonest-first", label: "Starting soon" },
  { id: "bestselling", label: "Best seller" },
];

interface Props {
  currentSort: sortOptions;
  setCurrentSort: React.Dispatch<React.SetStateAction<sortOptions>>;
}

export default function SortBy({ currentSort, setCurrentSort }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const sortLabel = dropdownOptions.find(
    (option) => option.id === currentSort
  )?.label;

  return (
    <div
      className={styles.sortBy}
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <div>Sort by </div>
      <div className={styles.currentSort}>{sortLabel}</div>
      <DownChevron />

      {showDropdown && (
        <div className={styles.sortByDropdown}>
          {dropdownOptions.map((option) => (
            <option key={option.id} className={styles.sortByDropdownOption[currentSort === option.id ? "selected" : "unselected"]} onClick={() => setCurrentSort(option.id)}>
              {option.label}
            </option>
          ))}
        </div>
      )}
    </div>
  );
}
