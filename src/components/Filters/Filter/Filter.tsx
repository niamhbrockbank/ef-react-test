import UpChevron from "./UpChevron";
import * as styles from "./Filter.css";

interface Props {
  title: string;
  options: string[];
}
export default function Filter({ title, options }: Props) {
  return (
    <div className={styles.filter}>
      <div className={styles.filterTitle}>
        <h3>Topics</h3> <UpChevron />
      </div>

      <div className={styles.filterOptions}>
        {options.map((option) => (
          <div className={styles.filterOption}>
            <input type="checkbox" id={option} className={styles.checkbox} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
