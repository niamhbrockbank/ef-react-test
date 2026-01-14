import Filter from "./Filter/Filter";
import * as styles from "./Filters.css";

export default function Filters() {
  return (
    <div className={styles.filters}>
      <p className={styles.sectionSummary}>Filter</p>
      <Filter
        title="Topics"
        options={[
          "Business Strategy",
          "Change & Culture",
          "Innovation & Digital Information",
          "Personal Leadership & Team Development",
        ]}
      />
      <button className={styles.clearButton}> x Clear filters</button>
    </div>
  );
}
