import sortPrograms from "./sortPrograms";

const programs = [
    {
    id: 2,
    title: "Developing an Entrepreurial Mindset: Speed, Creativity and Growth",
    topic: "change-and-culture",
    learningFormats: ["self-study"],
    bestseller: false,
    startDate: "2023-05-08T00:00:00+0000",
  },
  {
    id: 1,
    title: "Agile Innovation for Business Growth",
    topic: "change-and-culture",
    learningFormats: ["virtual", "residential", "blended", "self-study"],
    bestseller: false,
    startDate: "2023-05-05T00:00:00+0000",
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

test("sort array of programs into alphabetical order", () => {
    const alphabeticalOrder = [
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
    expect(sortPrograms("alphabetical", programs)).toStrictEqual(alphabeticalOrder)
})

test("sort array of programs into soonest first order", () => {
    const dateOrder = [
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

    expect(sortPrograms("soonest-first", programs)).toStrictEqual(dateOrder)
})

test("sort array of programs by bestsellers first", () => {
    const bestseller = {
    id: 3,
    title: "Leading Across Cultures",
    topic: "change-and-culture",
    learningFormats: ["virtual", "residential", "blended"],
    bestseller: true,
    startDate: "2023-07-08T00:00:00+0000",
  }


    expect(sortPrograms("bestselling", programs)[0]).toStrictEqual(bestseller)
})