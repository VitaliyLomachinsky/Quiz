const initialState = {
  tests: [
    {
      id: 1,
      question: "___ you at the mall at 6 pm yesterday? - No, I ___.",
      answers: [
        "Are, didn't",
        "Were, wasn't",
        "Were didnt",
        "you are cock sucker",
      ],
      correct: "Are, didn't",
      defaultClass: "Test",
      secelted: null,
      check: null,
    },
    {
      id: 2,
      question: "She ___ to the library after school.",
      answers: ["goed", "gone", "went"],
      correct: "gone",
      defaultClass: "Test",
      secelted: null,
      check: null,
    },

    {
      id: 3,
      question: "Where ___ last summer?",
      answers: ["you went", "did you go", "do you went"],
      correct: "did you go",
      defaultClass: "Test",
      secelted: null,
      check: null,
    },
    {
      id: 4,
      question: "Where ___ last summer?",
      answers: ["you went", "did you go", "do you went", "rick-dick"],
      correct: "did you go",
      defaultClass: "Test",
      secelted: null,
      check: null,
    },
  ],
  result: {
    disable: true,
    all_count: 0,
    all_correct: 0,
  },
};

export default initialState;
