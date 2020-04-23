import React, { Component } from "react";
import classes from "./Quize.module.css";
import ActiveQuize from "./../../components/ActiveQuize/ActiveQuize";

class Quize extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quize: [
      {
        id: 1,
        question: "How many will it be if 6 * 5",
        rightAnswerId: 2,
        answers: [
          { text: "25", id: 1 },
          { text: "30", id: 2 },
          { text: "35", id: 3 },
        ],
      },
      {
        id: 2,
        question: "How many will it be if 7 * 8",
        rightAnswerId: 1,
        answers: [
          { text: "56", id: 1 },
          { text: "48", id: 2 },
          { text: "54", id: 3 },
        ],
      },
      {
        id: 3,
        question: "How many will it be if 7 * 9",
        rightAnswerId: 2,
        answers: [
          { text: "52", id: 1 },
          { text: "63", id: 2 },
          { text: "61", id: 3 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quize[this.state.activeQuestion];
    if (question.rightAnswerId === answerId) {
      const timeout = window.setTimeout(() => {
        if(this.isQuizFinished()){
          console.log('finish');
        } else{
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }      
        window.clearTimeout(timeout);
      }, 1000);
      this.setState({
        answerState: { [answerId]: "success" },
      });
    } else {
      this.setState({
        answerState: { [answerId]: "fault" },
      });
    }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quize.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quize</h1>
          <ActiveQuize
            answers={this.state.quize[this.state.activeQuestion].answers}
            question={this.state.quize[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizeLength={this.state.quize.length}
            questionNumber={this.state.activeQuestion + 1}
            answerState={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quize;
