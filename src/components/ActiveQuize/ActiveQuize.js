import React from "react";
import classes from "./ActiveQuize.module.css";
import AnswerList from './../AnswerList/AnswerList';

const ActiveQuize = props => {
  return (
    <div className={classes.ActiveQuize}>
      <p className={classes.Question}>
        <span>
          <strong>{props.questionNumber}.</strong>&nbsp;
          {props.question}
        </span>
        <small>{props.questionNumber} from {props.quizeLength}</small>
      </p>
      <AnswerList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        answerState={props.answerState}
      />
    </div>
  );
};

export default ActiveQuize;
