import DownChevron from "./DownChevron";
import * as styles from "./SortBy.css";

export default function SortBy() {
  return (
    <div className={styles.sortBy}>
      <div>Sort by </div>{" "}
      <div className={styles.chosenSort}>Courses A to Z</div>
      <DownChevron />
    </div>
  );
}
