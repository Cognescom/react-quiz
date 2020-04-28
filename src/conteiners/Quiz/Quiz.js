import React, { Component } from "react";
import classes from "./Quize.module.css";
import ActiveQuize from "./../../components/ActiveQuize/ActiveQuize";
import FinishedQuize from "./../../components/FinishedQuize/FinishedQuize";

class Quize extends Component {
  state = {
    results: {},
    activeQuestion: 0,
    answerState: null,
    isFinished: false,
    quize: [
      {
        id: 1,
        question: "How many will it be if 6 * 5?",
        rightAnswerId: 2,
        answers: [
          { text: "25", id: 1 },
          { text: "30", id: 2 },
          { text: "35", id: 3 },
        ],
      },
      {
        id: 2,
        question: "How many will it be if 7 * 8?",
        rightAnswerId: 1,
        answers: [
          { text: "56", id: 1 },
          { text: "48", id: 2 },
          { text: "54", id: 3 },
        ],
      },
      {
        id: 3,
        question: "How many will it be if 7 * 9?",
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quize[this.state.activeQuestion];
    const results = this.state.results;
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      console.log(results);
      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "fault";
      this.setState({
        answerState: { [answerId]: "fault" },
        results,
      });
    }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quize.length;
  };

  repeatQuizeHandler = () => {
    this.setState({
      results: {},
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
    });
  };
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quize</h1>
          {this.state.isFinished ? (
            <FinishedQuize
              results={this.state.results}
              quize={this.state.quize}
              repeatQuize={this.repeatQuizeHandler}
            />
          ) : (
            <ActiveQuize
              answers={this.state.quize[this.state.activeQuestion].answers}
              question={this.state.quize[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizeLength={this.state.quize.length}
              questionNumber={this.state.activeQuestion + 1}
              answerState={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quize;
