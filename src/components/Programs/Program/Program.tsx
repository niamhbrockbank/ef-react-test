import { Program as ProgramType } from "src/types";
import * as styles from "./Program.css";
import { formatTag } from "src/utils/formatTag";

interface Props {
  program: ProgramType;
}

export default function Program({ program }: Props) {
  const { title, topic, learningFormats, bestseller } = program;
  return (
    <div className={styles.program}>
      <div className={styles.titleSection}>
        <h2>{title}</h2>
        <p>{bestseller ? "amazing" : "rubbish"}</p>
      </div>
      <div className={styles.body}>
        <p>{formatTag(topic)}</p>
        <div className={styles.learningFormats}>
          {learningFormats.map((format) => (
            <p>{formatTag(format)}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
