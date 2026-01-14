import { FilterGroup } from "src/types";
import Filter from "./Filter/Filter";
import * as styles from "./Filters.css";

interface Props {
  handleClearAll: () => void;
  handleTopicChange: (id: string) => void;
  handleFormatChange: (id: string) => void;
  topicFilterStatus: FilterGroup;
  formatFilterStatus: FilterGroup;
}

export default function Filters({
  handleClearAll,
  handleTopicChange,
  handleFormatChange,
  topicFilterStatus,
  formatFilterStatus,
}: Props) {
  return (
    <div className={styles.filters}>
      <p className={styles.sectionSummary}>Filter</p>
      <Filter
        title="Topics"
        options={topicFilterStatus}
        handleChange={handleTopicChange}
      />
      <Filter
        title="Learning Formats"
        options={formatFilterStatus}
        handleChange={handleFormatChange}
      />
      <button className={styles.clearButton} onClick={() => handleClearAll()}>
        x Clear filters
      </button>
    </div>
  );
}
