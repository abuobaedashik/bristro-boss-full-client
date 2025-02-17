import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
        return
    }

    const {error,paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: card
    })

    if (error) {
        console.log("[error message is] ",error)
    }
    else {
        console.log("[PaymentMethod]",paymentMethod)
    }

  
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe  }
      >
        Pay
      </button>
      {/* {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>} */}
    </form>
  );
};

export default CheckoutForm;
