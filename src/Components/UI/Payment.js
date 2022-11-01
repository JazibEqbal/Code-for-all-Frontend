import React, { useEffect } from "react";
import axios from "axios";
import styles from "./Payment.module.css";

const displayRazorpay = async (props) => {
  const data = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_URL}/user/payment`,
    data: {
      amount: 1,
    },
  });
  const options = {
    key: process.env.REACT_APP_YOUR_KEY_ID,
    currency: data.data.currency,
    amount: data.data.amount,
    description: "Solution transaction",
    order_id: data.data.id,
    handler: function (response) {
      localStorage.setItem(props.quesId, true);
      window.open(`http://localhost:3000/solution/${props.quesId}`);
    },
    prefill: {
      name: "Payment user",
      email: "payment@gmail.com",
      contact: "9898989898",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const Payment = (props) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <React.Fragment>
      <button
        className={styles.getSolutionButton}
        type="button"
        onClick={() => displayRazorpay(props)}
      >
        Get Solution
      </button>
    </React.Fragment>
  );
};

export default Payment;
