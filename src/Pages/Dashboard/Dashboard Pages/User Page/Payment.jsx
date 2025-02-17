import React from "react";
import DynamicTitle from "../../../Shared/DynamicTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Payment element/CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
  return (
    <div>
      <div className="md:mt-6 mt-4">
        <DynamicTitle
          subheading="---Payment to eat---"
          heading="PAYMENT"
        ></DynamicTitle>
      </div>

      <div className="bg-[#ffffff] mx-12 my-6 text-white p-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
