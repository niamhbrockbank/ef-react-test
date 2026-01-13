import Filters from "../Filters/Filters";
import Programs from "../Programs/Programs";
import * as styles from "./PageContent.css";

export default function PageContent() {
  return (
    <div className={styles.pageContent}>
      <Filters />
      <Programs />
    </div>
  );
}
