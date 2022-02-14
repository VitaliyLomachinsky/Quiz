import initialState from "./initialState";
const CHECK_ANSWERS = "CheckAnswers";
const CHANGE_VALUE = "ChangeValue";
const RETURN_COUNT = "ReturnCount";
const CLEAR = "Clear";
const ADD_TEST = "AddTest";

const test_reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_ANSWERS: {
      let completely = true;
      state.tests.find((el) => {
        if (el.check == null && completely == true) {
          completely = false;
          alert("Take the test completely!");
        }
      });
      let count = 0,
        correct = 0;

      if (completely == true) {
        window.scrollTo(0, 0);
        state.tests.find((el) => {
          el.secelted = true;
          count++;
          if (el.check == true) {
            el.defaultClass = "Test_correct";
            correct++;
          } else {
            el.defaultClass = "Test_incorrect";
          }
        });
        return {
          ...state,
          tests: [...state.tests],
          result: { all_count: count, all_correct: correct, disable: false },
        };
      }

      return {
        ...state,
        tests: [...state.tests],
      };
    }

    case CHANGE_VALUE: {
      state.tests.find((el) => {
        if (el.id == action.id) {
          if (el.correct == action.value) {
            el.check = true;
          } else {
            el.check = false;
          }
          return el;
        }
      });

      return { ...state, tests: [...state.tests] };
    }
    case CLEAR: {
      state.tests.map(
        (el) => (
          (el.secelted = null), (el.check = null), (el.defaultClass = "Test")
        )
      );
      debugger;
      return {
        tests: [...state.tests],
        result: { all_count: 0, all_correct: 0, disable: true },
      };
    }
    default: {
      return state;
    }
  }
};

export const CheckAnswersActionCreator = () => ({
  type: CHECK_ANSWERS,
});
export const ChangeValueActionCreator = (id, value) => ({
  type: CHANGE_VALUE,
  id,
  value,
});
export const ReturnCountActionCreator = () => ({
  type: RETURN_COUNT,
});
export const ClearActionCreator = () => ({
  type: CLEAR,
});
export const AddTestActionCreator = () => ({
  type: ADD_TEST,
});

export default test_reducer;
