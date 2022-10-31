import React from "react";
import { useLocation } from "react-router-dom";
import Input from "../Components/UI/Input";
import NavBar from "../Screen/NavBar";


const UploadQuestion = props => {
    const location = useLocation();
    const currContest = location.state.currContest;
    const currQues = location.state.question;
    
    const RenderQues = () => {
        if(currQues)
            return <h3>{currQues.question}</h3>
        else 
            return <Input id="question" type="text" label="Question" />
    }
  return (
    <React.Fragment>
      <NavBar />
      <div>
      <h1>Upload Question Solution</h1>
      <form>
        <h3>{currContest.contestname}</h3>
        <RenderQues />
        <Input id="answer" type="text" label="Answer" />
        <button>Upload</button>
      </form>
      </div>
    </React.Fragment>
  );
};

export default UploadQuestion;
