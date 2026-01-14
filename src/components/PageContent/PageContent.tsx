import { FilterGroup, Program } from "src/types";
import Filters from "../Filters/Filters";
import Programs from "../Programs/Programs";
import * as styles from "./PageContent.css";
import { useEffect, useState } from "react";
import clearAllFilters from "src/utils/clearAllFilters";
import { checkFilters } from "src/utils/checkFilters";

const initialTopicFilterStatus: FilterGroup = {
  "business-strategy": false,
  "change-and-culture": false,
  "innovation-and-digital-information": false,
  "personal-leadership-and-team-development": false,
};

const initialFormatFilterStatus: FilterGroup = {
  virtual: false,
  residential: false,
  blended: false,
  "self-study": false,
};

export default function PageContent() {
  const [topicFilterStatus, setTopicFilterStatus] = useState(
    initialTopicFilterStatus
  );
  const [formatFilterStatus, setFormatFilterStatus] = useState(
    initialFormatFilterStatus
  );
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch("http://localhost:3010/programs");
      const jsonBody: Program[] = await response.json();
      setPrograms(jsonBody);
    };

    fetchPrograms();
  }, []);

  function handleTopicChange(id: string) {
    setTopicFilterStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function handleFormatChange(id: string) {
    setFormatFilterStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function handleClearAll() {
    setTopicFilterStatus((prev) => {
      return clearAllFilters(prev);
    });

    setFormatFilterStatus((prev) => {
      return clearAllFilters(prev);
    });
  }

  const filteredPrograms = programs.filter((p) =>
    checkFilters(p, formatFilterStatus, topicFilterStatus)
  );

  return (
    <div className={styles.pageContent}>
      <Filters
        handleClearAll={handleClearAll}
        handleTopicChange={handleTopicChange}
        handleFormatChange={handleFormatChange}
        topicFilterStatus={topicFilterStatus}
        formatFilterStatus={formatFilterStatus}
      />
      <Programs programs={filteredPrograms} programCount={programs.length} />
    </div>
  );
}
