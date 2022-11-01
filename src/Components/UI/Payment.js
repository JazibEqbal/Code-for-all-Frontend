import React, { useEffect } from "react";
import axios from 'axios';

const displayRazorpay = async (props) => {
    
    const data = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_URL}/user/payment`,
        data: {
            amount : 20 + props.quesNumber*10,
        }
    })
    const options = {
        key: process.env.REACT_APP_YOUR_KEY_ID,
        currency : data.data.currency,
        amount : data.data.amount,
        description: 'Wallet transaction',
        order_id : data.data.id,
        handler: function (response) {
            // alert('Hello Razorpay ' + response.razorpay_payment_id)
        },
        prefill : {
            name: 'Payment user',
            email: 'payment@gmail.com',
            contact: '9898989898'
        }
    }
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

const Payment = (props) => {
  const loadScript = src => {
    return new Promise(resolve => {
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

  return <React.Fragment>
    <button type="button" onClick={() => displayRazorpay(props)}>Get Solution</button>
  </React.Fragment>;
};

export default Payment;
