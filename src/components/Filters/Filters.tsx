import Filter from "./Filter/Filter";
import * as styles from "./Filters.css";

const options = [
  { id: "business-strategy", label: "Business Strategy" },
  { id: "change-and-culture", label: "Change & Culture" },
  {
    id: "innovation-and-digital-information",
    label: "Innovation & Digital Information",
  },
  {
    id: "personal-leadership-and-team-development",
    label: "Personal Leadership & Team Development",
  },
];

export default function Filters() {
  return (
    <div className={styles.filters}>
      <p className={styles.sectionSummary}>Filter</p>
      <Filter title="Topics" options={options} />
      <button className={styles.clearButton}> x Clear filters</button>
    </div>
  );
}
