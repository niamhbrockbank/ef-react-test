import { useMemo, useState } from "react";
import Program from "./Program/Program";
import { Program as ProgramType, sortOptions } from "../../types";
import * as styles from "./Programs.css";
import SortBy from "./SortBy/SortBy";
import sortPrograms from "src/utils/sortPrograms";

interface Props {
  programs: ProgramType[];
  programCount: number;
}

export default function Programs({ programs, programCount }: Props) {
  const [currentSort, setCurrentSort] = useState<sortOptions>("alphabetical");

  const sortedPrograms = useMemo(() => {
    return sortPrograms(currentSort, programs);
  }, [currentSort, programs]);

  return (
    <div>
      <div className={styles.sectionSummary}>
        <p className={styles.showingNow}>
          Showing {sortedPrograms.length} of {programCount} courses
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
