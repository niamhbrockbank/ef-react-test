import * as styles from "./Filters.css";

export default function Filters() {
  return (
    <div className={styles.filters}>
      <p className={styles.sectionSummary}>Filter</p>
      <div>
        <h2>Topics</h2>
        <span>
          <input type="checkbox" id="option" />
          <label htmlFor="option">options</label>
        </span>
      </div>
      <button>x Clear Filters</button>
    </div>
  );
}
