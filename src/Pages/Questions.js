import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useLocation, Link } from "react-router-dom";
import NavBar from "../Screen/NavBar";
import AuthContext from "../Store/auth-context";

const Questions = props => {
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

  const renderList = response.map(item =>
    <div key={item._id}>
      <h4>
        {item.question}
      </h4>
      {item.answer ? <p>{item.answer}</p> : <p></p>}
      {ctx.isLoggedIn &&
        <Link to={`/upload/question/${currContest._id}`} state={{ currContest, question: item }}>
          Upload
        </Link>}
    </div>
  );

  return (
    <React.Fragment>
      <NavBar />
      <h2>
        {currContest.contestname}
      </h2>
      {renderList}
      <br />
      {ctx.isLoggedIn &&
        <Link to={`/upload/question/${currContest._id}`} state={{ currContest }}>
          Upload New Question
        </Link>}
    </React.Fragment>
  );
};

export default Questions;
