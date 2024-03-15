export const validatehtmlForm = (email, cardNo, creditCvc, creditExpiry, billingAddress, billingState, setError) => {
    console.log("Validating htmlForm...");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardNumberRegex =
        /^(\d{4}[-]){3}\d{4}$|^\d{16}$/;
    const cvcRegex = /^\d{3,4}$/
;
    const expiryRegex = /^(0[1-9]|1[0-2])\/(2[1-9]|[3-9][0-9]|1[0-9]{2})$/
;

    if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return false;
    }

    if (!cardNumberRegex.test(cardNo)) {
        setError("Please enter a valid card number.");
        return false;
    }

    if (!cvcRegex.test(creditCvc)) {
        setError("Please enter a valid CVC (3 or 4 digits).");
        return false;
    }

    if (!expiryRegex.test(creditExpiry)) {
        setError("Please enter a valid expiration date (MM/YY).");
        return false;
    }

    if (billingAddress.trim() === "") {
        setError("Please enter a billing address.");
        return false;
    }

    if (billingState === "") {
        setError("Please select a state.");
        return false;
    }

    return true;
};
