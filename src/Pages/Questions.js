import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import NavBar from "../Screen/NavBar";
import AuthContext from "../Store/auth-context";
import Payment from "../Components/UI/Payment";
import styles from "./Questions.module.css";

const Questions = (props) => {
  const ctx = useContext(AuthContext);

  const [response, setResponse] = useState([]);

  const location = useLocation();
  const currContest = location.state.contest;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/questions/contest/${currContest._id}`
      );
      setResponse(res.data.contestData);
    }
    getData();
  }, [currContest._id]);

  const renderList = response.map((item) => (
    <div key={item._id} className={styles.questionsMain}>
      <div>
      <h3 className={styles.questionsTextStyle}>Q. {item.question}</h3>
      {item.answer ? (
        <p className={styles.questionsAnswerStyle}>Solution: {item.answer}</p>
      ) : (
        <p className={styles.questionsAnswerStyle}></p>
      )}
      <Payment quesNumber={item.number} quesId={item._id}/>
      {ctx.isLoggedIn && (
        <Link
          to={`/upload/question/${currContest._id}`}
          state={{ currContest, question: item }}
          className={styles.questionUploadButton}
        >
          Upload
        </Link>
      )}
      <hr className={styles.horizontalLine}/>
    </div>
    </div>
  ));

  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.questionsMain}>
        <h3 className={styles.questionsContestNameHeading}>{currContest.contestname}</h3>
        {renderList}
        {ctx.isLoggedIn && (
          <Link
            to={`/upload/question/${currContest._id}`}
            state={{ currContest }} className={styles.questionUploadNewQuestionButton}
          >
            Upload New Question
          </Link>
        )}
      </div>
    </React.Fragment>
  );
};

export default Questions;
