"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../context/UserContext";
import FlowContext from "../context/FlowContext";

const OrderConfirmationPage = () => {
  const router = useRouter();
  const {
    cardHolderName,
    paymentMethod,
    paymentCompany,
    country,
    state,
    billingAmount,
    upiId,
  } = useContext(UserContext);
  const [orderId, setOrderId] = useState(null);
  const [orderStatus, setOrderStatus] = useState("Pending");

  const {
    setConfirmationCompleted,
    setCheckoutCompleted,
    setPaymentCompleted,
  } = useContext(FlowContext);
  useEffect(() => {
    setOrderId(Math.floor(Math.random() * 1000000) + 1);
    // const storedStatus = sessionStorage.getItem("orderStatus");
    // if (storedStatus) {
    //   setOrderStatus(storedStatus);
    // } else {
    const timer = setTimeout(() => {
      const randomStatus = Math.random() < 0.7 ? "Success" : "Failure";
      setOrderStatus(randomStatus);
      console.log("randomStatus", randomStatus);
      if (randomStatus === "Success") {
        setConfirmationCompleted(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (cardHolderName === "" && upiId === "") {
      router.push("/");
    }
  }, []);

  const getStatusColor = () => {
    switch (orderStatus) {
      case "Success":
        return "bg-green-100 text-green-700";
      case "Failure":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const getStatusMessage = () => {
    switch (orderStatus) {
      case "Success":
        return "Your order has been successfully placed!";
      case "Failure":
        return "Sorry, there was an error processing your order. Please try again later.";
      default:
        return "Your order is pending. Please wait for confirmation.";
    }
  };

  const getPaymentDetails = () => {
    console.log(
      "Payment Method inside OrderConfirmation: ",
      paymentMethod + " " + paymentCompany + " " + upiId
    );
    if (paymentMethod === "Card") {
      return (
        <div className="mb-4">
          <p className="font-semibold">Payment Method: {paymentMethod}</p>
          <p className="font-semibold">Name: {cardHolderName}</p>
          <p className="font-semibold">Country: {country}</p>
          <p className="font-semibold">State: {state}</p>
        </div>
      );
    } else if (paymentMethod === "UPI") {
      return (
        <div className="mb-4">
          <p className="font-semibold">Payment Method: UPI</p>
          <p className="font-semibold">
            Payment executed by {paymentCompany} of UPI ID ***{upiId.slice(-4)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid place-items-center h-full">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
        <div className={`p-4 mb-4 rounded-lg ${getStatusColor()}`}>
          <p className="font-semibold">{getStatusMessage()}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Order ID: {orderId}</p>
          <p className="font-semibold">Total Amount: ${billingAmount}</p>
        </div>
        {getPaymentDetails()}
        <div className="mb-4">
          <p className="font-semibold">Order Status: {orderStatus}</p>
        </div>
        <button
          onClick={() => {
            setCheckoutCompleted(false);
            setPaymentCompleted(false);
            setConfirmationCompleted(false);
            router.push("/");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Back to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
