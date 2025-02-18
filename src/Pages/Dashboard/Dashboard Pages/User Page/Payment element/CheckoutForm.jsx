import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useCart from "../../../../../Hooks/useCart";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [TransactionId, setTransactionId] = useState(null);
  const axioxSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
  const { user } = useContext(AuthContext);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  //   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (totalPrice > 0) {
         axioxSecure.post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axioxSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      console.log("[error message is] ", error);
      setErrorMessage(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm Error", confirmError);
      setErrorMessage(confirmError.message);
    } else {
      console.log("payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("payment success");
        const transctonId = paymentIntent.id;
        setTransactionId(transctonId);
        // save the payment
        const payment = {
          transactionId: transctonId,
          email: user?.email,
          price: totalPrice,
          cardIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          date: new Date(),
          status: "pending",
        };
        const res = await axioxSecure.post("/payments", payment);
        console.log(res.data);
        refetch();
        if(res.data.PaymentResult.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }

      }
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
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {/* {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>} */}
      {errorMessage && (
        <div className="text-red-500 font-medium text-base">{errorMessage}</div>
      )}
      {TransactionId && (
        <div className="text-green-700 font-medium text-base mt-2">
          Transaction Id : {TransactionId}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
