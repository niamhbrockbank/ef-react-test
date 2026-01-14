import { FilterGroup } from "src/types";
import Filter from "./Filter/Filter";
import * as styles from "./Filters.css";
import { useState } from "react";

const initialFilterStatus: FilterGroup = {
  "business-strategy": false,
  "change-and-culture": false,
  "innovation-and-digital-information": false,
  "personal-leadership-and-team-development": false,
};

export default function Filters() {
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  function handleChange(id: string) {
    setFilterStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function handleClearAll() {
    setFilterStatus((prev) => {
      const filters = Object.keys(prev);
      const allFalse = filters.map((f) => [f, false]);
      const newStatus = Object.fromEntries(allFalse) as FilterGroup;

      return newStatus;
    });
  }

  return (
    <div className={styles.filters}>
      <p className={styles.sectionSummary}>Filter</p>
      <Filter
        title="Topics"
        options={filterStatus}
        handleChange={handleChange}
      />
      <button className={styles.clearButton} onClick={() => handleClearAll()}>
        x Clear filters
      </button>
    </div>
  );
}
