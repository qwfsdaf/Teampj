import React from 'react';
import './css/ox_question.css';

const Quiz = () => {
  return (
    <>
      <header></header>
      <div className="container">
        <div className="quiz_title">OX 퀴즈</div>
        <div className="quiz_box">
          <div className="quiz_Q">정답</div>
          <a href="quiz_index.html"><div className="answer_btn">처음으로</div></a>
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default Quiz;