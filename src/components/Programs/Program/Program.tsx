import { Program as ProgramType } from "src/types";
import * as styles from "./Program.css";
import { formatTag } from "src/utils/formatTag";
import Star from "./Star";

interface Props {
  program: ProgramType;
}

export default function Program({ program }: Props) {
  const { title, topic, learningFormats, bestseller } = program;
  return (
    <div className={styles.program}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>{title}</h2>
        {bestseller && (
          <div className={styles.bestSeller}>
            <Star /> Best seller
          </div>
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.topics}>{formatTag(topic)}</p>
        <div className={styles.learningFormats}>
          {learningFormats.map((format, i) => (
            <div key={format} className={styles.learningFormat}>
              <p>{formatTag(format)}</p>
              {i + 1 !== learningFormats.length && (
                <div className={styles.separator} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
