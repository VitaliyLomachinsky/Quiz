import { connect } from "react-redux";
import Settings_Buttons from "./Settings_Buttons";
import {
  AddTestActionCreator,
  ClearActionCreator,
} from "../../store/test_reducer";

const mapDispatchToProps = (dispatch) => {
  return {
    AddTest: () => {
      dispatch(AddTestActionCreator());
    },
    Clear: () => {
      dispatch(ClearActionCreator());
    },
  };
};

const Settings_ButtonsContainer = connect(
  null,
  mapDispatchToProps
)(Settings_Buttons);

export default Settings_ButtonsContainer;
