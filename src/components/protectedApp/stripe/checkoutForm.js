import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

import CardSection from "./CardSection";

export default function CheckoutForm() {
  const [client, setClient] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const params = useParams();
  //   console.log("params ", params);
  const class_id = 21;

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/clients/${params.id}/classes/${class_id}/payment`)
      .then((res) => {
        console.log("res ", res);
        setClient(res.data.client_secret);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  }, []);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    //  const class_id = 21;
    //  try {
    //    const getData = await axiosWithAuth().get(
    //      `/api/clients/${params.id}/classes/${class_id}/payment`
    //    );
    //    console.dir("getData ", getData);
    //  } catch (error) {
    //    console.log("error ", error);
    //  }

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(client, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen",
        },
      },
    });
    console.log("result here ", result);

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe} className="confirm-btn">
        Confirm order
      </button>
    </form>
  );
}
