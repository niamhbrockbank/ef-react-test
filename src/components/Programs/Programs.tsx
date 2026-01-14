import { useEffect, useMemo, useState } from "react";
import Program from "./Program/Program";
import { Program as ProgramType } from "../../types";
import * as styles from "./Programs.css";
import SortBy from "./SortBy/SortBy";
import sortPrograms from "src/utils/sortPrograms";

export type sortOptions = "alphabetical" | "soonest-first" | "bestselling";

export default function Programs() {
  const [currentSort, setCurrentSort] = useState<sortOptions>("alphabetical");
  const [programs, setPrograms] = useState<ProgramType[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch("http://localhost:3010/programs");
      const jsonBody: ProgramType[] = await response.json();
      setPrograms(jsonBody);
    };

    fetchPrograms();
  }, []);

  const sortedPrograms = useMemo(() => {
    return sortPrograms(currentSort, programs);
  }, [currentSort, programs]);

  return (
    <div>
      <div className={styles.sectionSummary}>
        <p className={styles.showingNow}>
          Showing {sortedPrograms.length} of {programs.length} courses
        </p>
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
