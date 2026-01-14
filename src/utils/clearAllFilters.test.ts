import { FilterGroup } from "src/types";
import clearAllFilters from "./clearAllFilters"

const variesTopicFilterStatus: FilterGroup = {
  "business-strategy": false,
  "change-and-culture": true,
  "innovation-and-digital-information": true,
  "personal-leadership-and-team-development": true,
};

const allFalseTopicFilterStatus: FilterGroup = {
  "business-strategy": false,
  "change-and-culture": false,
  "innovation-and-digital-information": false,
  "personal-leadership-and-team-development": false,
};


test("set all filters to false", () => {
    expect(clearAllFilters(variesTopicFilterStatus)).toStrictEqual(allFalseTopicFilterStatus)
})