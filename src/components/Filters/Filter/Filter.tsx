import UpChevron from "./UpChevron";
import * as styles from "./Filter.css";
import { FilterGroup } from "src/types";
import { formatTag } from "src/utils/formatTag";

interface Props {
  title: string;
  options: FilterGroup;
  handleChange: (id: string) => void;
}
export default function Filter({ title, options, handleChange }: Props) {
  return (
    <div className={styles.filter}>
      <div className={styles.filterTitle}>
        <h3>{title}</h3> <UpChevron />
      </div>

      <div className={styles.filterOptions}>
        {Object.entries(options).map((option) => {
          const [id, checked] = option;
          return (
            <div className={styles.filterOption} key={id}>
              <input
                type="checkbox"
                id={id}
                className={styles.checkbox}
                checked={checked}
                onChange={() => handleChange(id)}
              />
              <label htmlFor={id}>{formatTag(id)}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
