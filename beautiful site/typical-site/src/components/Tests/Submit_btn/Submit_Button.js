import Button from "@mui/material/Button";
import s from "./Submit_Button.module.css";

const Submit_Button = (props) => {
  return (
    <div className={s.btn_div}>
      <Button
        variant="contained"
        color="success"
        color="secondary"
        onClick={props.submit}
      >
        Check my answers
      </Button>
    </div>
  );
};

export default Submit_Button;
