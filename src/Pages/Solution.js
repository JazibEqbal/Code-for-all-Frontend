import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../Screen/NavBar";

const Solution = props => {
  const { questionId } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(
    () => {
      async function getData() {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/questions/${questionId}`
        );
        setResponse(res.data.answer);
      }
      getData();
    },
    [questionId]
  );

  if (!localStorage.getItem(questionId)) {
    return <React.Fragment>Please pay for the solution</React.Fragment>;
  }

  return (
    <React.Fragment>
      <NavBar />
      {response}
    </React.Fragment>
  );
};

export default Solution;
