import React from "react";
import Input from "../Components/UI/Input";
import NavBar from "../Screen/NavBar";
import styles from "./UploadContest.module.css";
const UploadContest = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.uploadMain}>
        <div className={styles.mainContainerUpload}>
          <h1 className={styles.headingTextUpload}>Upload New Contest</h1>
          <form>
            <Input id="organiser" type="text" label="Organiser" />
            <Input id="contestname" type="text" label="Contest Name" />
            <Input id="dateofcontest" type="date" label="Date of Contest" />
            <button className={styles.uploadButtonUpload}>Upload</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadContest;
