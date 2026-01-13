import { useMemo, useState } from "react";
import Program from "./Program/Program";
import * as styles from "./Programs.css";
import SortBy from "./SortBy/SortBy";
import sortPrograms from "src/utils/sortPrograms";

const programs = [
  {
    id: 1,
    title: "Agile Innovation for Business Growth",
    topic: "change-and-culture",
    learningFormats: ["virtual", "residential", "blended", "self-study"],
    bestseller: false,
    startDate: "2023-05-05T00:00:00+0000",
  },
  {
    id: 2,
    title: "Developing an Entrepreurial Mindset: Speed, Creativity and Growth",
    topic: "change-and-culture",
    learningFormats: ["self-study"],
    bestseller: false,
    startDate: "2023-05-08T00:00:00+0000",
  },
  {
    id: 3,
    title: "Leading Across Cultures",
    topic: "change-and-culture",
    learningFormats: ["virtual", "residential", "blended"],
    bestseller: true,
    startDate: "2023-07-08T00:00:00+0000",
  },
];

export type sortOptions = "alphabetical" | "soonest-first" | "bestselling";

export default function Programs() {
  const [currentSort, setCurrentSort] = useState<sortOptions>("alphabetical");

  const sortedPrograms = useMemo(() => {
    return sortPrograms(currentSort, programs);
  }, [currentSort]);

  return (
    <div>
      <div className={styles.sectionSummary}>
        <p className={styles.showingNow}>Showing 20 of 23 courses</p>
        <SortBy currentSort={currentSort} setCurrentSort={setCurrentSort} />
      </div>
      <div className={styles.programs}>
        {sortedPrograms.map((p) => (
          <Program program={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
