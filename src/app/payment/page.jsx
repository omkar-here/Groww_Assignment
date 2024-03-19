"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import UpiPaymentDetails from "../components/UpiPaymentCompanyOptions";
import CardLogo from "/public/CardLogo.jpeg";
import UPILogo from "/public/upiTwitter.jpg";
import CardPaymentDetails from "../components/CardPaymentDetails";
import UpiPaymentOptions from "../components/UpiPaymentCompanyOptions";
import { validatehtmlForm } from "../utils/validateHtmlForm";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";

import FlowContext from "../context/FlowContext";
const Payment = () => {
  const [cardNo, setCardNo] = useState("");
  const [creditExpiry, setCreditExpiry] = useState("");
  const [creditCvc, setCreditCvc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const { setPaymentCompleted } = useContext(FlowContext);

  const {
    email,
    setEmail,
    cardHolderName,
    setCardHolderName,
    paymentMethod,
    setPaymentMethod,
    country,
    state,
  } = useContext(UserContext);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting htmlForm...");
    if (
      !validatehtmlForm(
        email,
        cardNo,
        creditCvc,
        creditExpiry,
        setError,
        country,
        state
      )
    ) {
      return; // Prevent submission if validation fails
    }
    console.log("htmlForm validated!");
    setIsLoading(true);
    setError(null);

    setPaymentCompleted(true);

    console.log("Payment successful!");
    router.push("/orderConfirmation");
  };

  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="mt-8 text-lg font-medium">Payment Methods</p>
          <div className="mt-5 grid gap-6">
            <div className="relative ">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
              />
              <span
                className={`${
                  paymentMethod === "Card" ? "border-gray-700" : ""
                }  absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white`}
              ></span>
              <label
                className={`${
                  paymentMethod == "Card"
                    ? "border-2 border-gray-700 bg-gray-50 "
                    : ""
                }   flex cursor-pointer select-none rounded-lg border border-gray-300`}
                htmlFor="radio_1"
                onClick={() => handlePaymentMethodChange("Card")}
              >
                <Image
                  className="w-16 h-16 object-contain"
                  src={CardLogo}
                  alt=""
                />
                <div className="ml-5 p-4">
                  <span className="mt-2 font-semibold">Cards</span>

                  {/* <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p> */}
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className={`${
                  paymentMethod == "UPI"
                    ? "border-2 border-gray-700 bg-gray-50 "
                    : ""
                }   flex cursor-pointer select-none rounded-lg border border-gray-300`}
                htmlFor="radio_2"
                onClick={() => handlePaymentMethodChange("UPI")}
              >
                <Image
                  className="w-16 h-16 object-contain"
                  src={UPILogo}
                  alt=""
                />
                <div className="ml-5 p-4">
                  <span className="mt-2 font-semibold">UPI</span>
                  {/* <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p> */}
                </div>
              </label>
            </div>
          </div>
        </div>
        {paymentMethod === "Card" ? (
          <CardPaymentDetails
            email={email}
            setEmail={setEmail}
            cardHolderName={cardHolderName}
            setCardHolderName={setCardHolderName}
            cardNo={cardNo}
            setCardNo={setCardNo}
            creditExpiry={creditExpiry}
            setCreditExpiry={setCreditExpiry}
            creditCvc={creditCvc}
            setCreditCvc={setCreditCvc}
            error={error}
            setError={setError}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            handleSubmit={handleSubmit}
          />
        ) : (
          <UpiPaymentOptions />
        )}
      </div>
    </div>
  );
};

export default Payment;
