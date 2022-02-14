import Test from "../Test/Test";
import s from "./Tests.module.css";
import Submit_Button from "./Submit_btn/Submit_Button.js";

const Tests = (props) => {
  debugger;
  const Tests_array = props.data.map((test) => (
    <Test
      questions={test.question}
      answers={test.answers}
      check={test.check}
      secelted={test.secelted}
      id={test.id}
      changeValue={props.ChangeValue}
      defaultClass={test.defaultClass}
    ></Test>
  ));

  let insert_point = () => {
    debugger;
    return (
      <p
        className={
          props.result_data.disable ? s.grade && s.grade_none : s.grade
        }
      >
        {props.result_data.all_correct}/{props.result_data.all_count}
      </p>
    );
  };
  return (
    <div className={s.Tests}>
      {insert_point()}
      {Tests_array}
      <Submit_Button submit={props.SubmitClick} />
    </div>
  );
};

export default Tests;
