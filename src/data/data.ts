import { ICategory } from "./../models";

// export const data = {
//     categories: [
//         { id: 1, name: "WORDS", path: "/words"},
//         { id: 2, name: "WORDS-PHRASES", path: "/words_phrases"},
//         { id: 3, name: "PHRASES", path: "/phrases_1"},
//         { id: 4, name: "X", path: "/x"},
//         { id: 5, name: "XXX", path: "/xxx"},
//         { id: 6, name: "THEMATIC", path: "/thematic"},
//     ],
//     thematic: [
//         { id: 1, title: "Booze" },
//         { id: 2, title: "Drugs" },
//         { id: 3, title: "Money" },
//     ],
//     booze: [
//         { id: 1, term: "booze", translate: "выпивка" },
//         { id: 2, term: "hangover", translate: "похмелье" },
//         { id: 3, term: "over-served", translate: "too much alcohol..." },
//         { id: 4, term: "tallboy", translate: "a 24 oz can of beer" }
//     ],
//     drugs: [
//         { id: 1, term: "scante", translate: "кристаллический мет, дурь" },
//         { id: 2, term: "weed", translate: "трава" },
//     ],
//     money: [
//         { id: 1, term: "Big One", translate: "1000$" },
//         { id: 2, term: "G's", translate: "1000$" },
//     ],
// }

export const categories: ICategory[] = [
    { id: 1, name: "WORDS", path: "/words", subCategories: [
      { id: 1, title: "Universal", path: "/universal" },
      { id: 2, title: "About time", path: "/about_time" },
      { id: 3, title: "About space", path: "/about_sapce" },
      { id: 4, title: "About amount", path: "/about_amount" }
    ] },
  //   { id: 2, name: "WORDS-PHRASES", path: "/words_phrases", subCategories: null },
  {
    id: 3,
    name: "PHRASES",
    path: "/phrases_1",
    subCategories: [
      { id: 1, title: "Phrases", path: "/phrases" },
      { id: 2, title: "Questions", path: "/questions" },
      { id: 3, title: "Etiquette", path: "/etiquette" }
    ],
  },
  //   { id: 4, name: "X", path: "/x", subCategories: null },
  //   { id: 5, name: "XXX", path: "/xxx", subCategories: null },
  {
    id: 6,
    name: "THEMATIC",
    path: "/thematic",
    subCategories: [
      { id: 1, title: "Booze", path: "/booze" },
      { id: 2, title: "Drugs", path: "/drugs" },
      { id: 3, title: "Money", path: "/money" }
    ],
  },
];

export const items = {
  booze: [
    { id: 1, term: "booze", translate: "выпивка" },
    { id: 2, term: "hangover", translate: "похмелье" },
    { id: 3, term: "over-served", translate: "too much alcohol..." },
    { id: 4, term: "tallboy", translate: "a 24 oz can of beer" },
  ],
  drugs: [
    { id: 1, term: "batch", translate: "партия" },
    { id: 2, term: "bud", translate: "марихуана" },
    { id: 3, term: "dope", translate: "дурман, кайф" },
    { id: 4, term: "fix", translate: "доза" },
    { id: 5, term: "pipe", translate: "трубка для курения марихуаны" },
    { id: 6, term: "stash", translate: "заначка" },
    { id: 7, term: "weed", translate: "трава" },
  ],
  money: [
    { id: 1, term: "Big One", translate: "1000$" },
    { id: 2, term: "G's", translate: "1000$" },
  ],
};
