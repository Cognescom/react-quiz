import React from "react";
import classes from "./FinishedQuize.module.css";
import Button from './../UI/Button/Button';

const FinishedQuize = (props) => {
  const successCount = Object.values(props.results).reduce((total, value) => {
    if(value === 'success'){
      total++;
    }
    return total
  }, 0);

  return (
    <div className={classes.FinishedQuize}>
      <ul>
        {props.quize.map((quizeItem, index) => {
          const cls = [
            "fa",
            props.results[quizeItem.id] === "success" ? "fa-check" : "fa-times",
            classes[props.results[quizeItem.id]],
          ];
          console.log(props.results);
          return (
            <li key={index}>
              <strong>{quizeItem.id}.</strong>&nbsp;
              {quizeItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>

      <p>
        Right answer: {successCount} from {props.quize.length}
      </p>
      <div>
        <Button onClick={props.repeatQuize} type='primary'>Repeat</Button>
        <Button type='success'>To quiz list</Button>
      </div>
    </div>
  );
};

export default FinishedQuize;
