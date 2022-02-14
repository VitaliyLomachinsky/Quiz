import "./Test.css";
import RadioButtonsGroup from "./RadioButtons/RadioButtons";

const Test = (props) => {
  debugger;

  return (
    <div className={props.defaultClass}>
      <p className="question">{props.questions}</p>
      <RadioButtonsGroup
        answers={props.answers}
        changeValue={props.changeValue}
        id={props.id}
      />
    </div>
  );
};

export default Test;
