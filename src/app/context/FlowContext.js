"use client"
import React, { createContext, useContext, useState } from "react";

// Create a context for Flow state management
const FlowContext = createContext();

// Custom hook to access Flow context values
export const useFlowContext = () => useContext(FlowContext);

// FlowContext provider component
export const FlowContextProvider = ({ children }) => {
    const [checkoutCompleted, setCheckoutCompleted] = useState(false);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [confirmationCompleted, setConfirmationCompleted] = useState(false);

    return (
        <FlowContext.Provider value={{ checkoutCompleted, setCheckoutCompleted, paymentCompleted, setPaymentCompleted, confirmationCompleted, setConfirmationCompleted }}>
            {children}
        </FlowContext.Provider>
    );
};

export default FlowContext;
