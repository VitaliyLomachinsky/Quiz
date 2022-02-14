import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import s from "./RadioButtons.module.css";

export default function RadioButtonsGroup(props) {
  let Change_ref = React.createRef();
  const OnChangeListener = (evt) => {
    props.changeValue(props.id, evt.target.value);
  };

  const label_item = props.answers.map((answer) => (
    <FormControlLabel
      value={answer}
      control={<Radio color="secondary" />}
      label={<span className={s.answer_text}>{answer}</span>}
      onChange={(evt) => OnChangeListener(evt)}
      ref={Change_ref}
    />
  ));

  return (
    <div className="answer_text">
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {label_item}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
