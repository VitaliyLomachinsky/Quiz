import Button from "@mui/material/Button";
import s from "./Settings_Buttons.module.css";

const Settings_Buttons = (props) => {
  return (
    <div className={s.Settings}>
      <Button variant="contained" color="warning">
        Add
      </Button>
      <Button variant="contained" color="info" onClick={props.Clear}>
        Clear
      </Button>
    </div>
  );
};

export default Settings_Buttons;
