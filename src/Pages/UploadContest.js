import React from "react";
import Input from "../Components/UI/Input";
import NavBar from "../Screen/NavBar";

const UploadContest = props => {
  return (
    <React.Fragment>
      <NavBar />
      <div>
      <h1>Upload New Contest</h1>
      <form>
        <Input id="organiser" type="text" label="Organiser" />
        <Input id="contestname" type="text" label="Contest Name" />
        <Input id="dateofcontest" type="date" label="Date of Contest" />
        <button>Upload</button>
      </form>
      </div>
    </React.Fragment>
  );
};

export default UploadContest;
