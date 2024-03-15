"use client";
import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [billingAmount, setBillingAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [paymentCompany, setPaymentCompany] = useState("");
  const [upiId, setUpiId] = useState("");
  return (
    <UserContext.Provider
      value={{
        paymentMethod,
        setPaymentMethod,
        billingAmount,
        setBillingAmount,
        email,
        setEmail,
        cardHolderName,
        setCardHolderName,
        paymentCompany,
        setPaymentCompany,
        upiId,
        setUpiId
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
