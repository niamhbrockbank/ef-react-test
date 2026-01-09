import Filters from "../Filters/Filters";
import * as styles from "./PageContent.css";

export default function PageContent() {
  return (
    <div className={styles.pageContent}>
      <Filters />
      <span>programs</span>
    </div>
  );
}
