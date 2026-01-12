import Program from "./Program/Program";
import * as styles from "./Programs.css";
import SortBy from "./SortBy/SortBy";

const programs = [
  {
    id: 1,
    title: "Agile Innovation for Business Growth",
    topic: "change-and-culture",
    learningFormats: ["virtual", "residential", "blended", "self-study"],
    bestseller: false,
    startDate: "2023-05-05T00:00:00+0000",
  },
  {
    id: 2,
    title: "Developing an Entrepreurial Mindset: Speed, Creativity and Growth",
    topic: "change-and-culture",
    learningFormats: ["self-study"],
    bestseller: false,
    startDate: "2023-05-08T00:00:00+0000",
  },
  {
    id: 3,
    title: "Leading Across Cultures",
    topic: "change-and-culture",
    learningFormats: ["virtual", "residential", "blended"],
    bestseller: true,
    startDate: "2023-07-08T00:00:00+0000",
  },
];

export default function Programs() {
  return (
    <div>
      <div className={styles.sectionSummary}>
        <p className={styles.showingNow}>Showing 20 of 23 courses</p>
        <SortBy />
      </div>
      <div className={styles.programs}>
        {programs.map((p) => (
          <Program program={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
