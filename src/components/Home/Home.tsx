import PageContent from "../PageContent/PageContent";
import PageSummary from "../PageSummary/PageSummary";
import * as styles from "./Home.css";

export default function Home() {
  return (
    <h1 className={styles.home}>
      <PageSummary />
      <PageContent />
    </h1>
  );
}
