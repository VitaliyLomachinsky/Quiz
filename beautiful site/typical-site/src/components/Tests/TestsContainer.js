import Tests from "./Tests";
import { connect } from "react-redux";
import {
  ChangeValueActionCreator,
  CheckAnswersActionCreator,
} from "../../store/test_reducer";

const mapStateToProps = (state) => {
  return {
    data: state.Test_data.tests,
    result_data: state.Test_data.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeValue: (id, value) => {
      dispatch(ChangeValueActionCreator(id, value));
    },
    SubmitClick: () => {
      dispatch(CheckAnswersActionCreator());
    },
  };
};

const TestsContainer = connect(mapStateToProps, mapDispatchToProps)(Tests);

export default TestsContainer;
