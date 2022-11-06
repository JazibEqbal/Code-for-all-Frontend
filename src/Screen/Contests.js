import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Contest.module.css";
import { Link } from "react-router-dom";

function Contests() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/contest`
      );
      setResponse(res.data.contests);
    }
    getData();
  }, []);
  //console.log(process.env.REACT_APP_BACKEND_URL);
  const renderContests = response.map(
    item =>
      !item.ongoing
        ? <div key={item._id} className={styles.contestLinks}>
            <h4>
              {item.organiser.toUpperCase()}
            </h4>
            <Link to={`/question/${item._id}`} state={{ contest: item }}>
              {item.contestname}
            </Link>
          </div>
        : ""
  );

  return (
    <div className={styles.contestsMain}>
      <h2>Past Contests</h2>
      <div className={styles.contestNames}>
        {renderContests}
      </div>
    </div>
  );
}

export default Contests;
