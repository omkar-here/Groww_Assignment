export const validatehtmlForm = (props) => {
    const {
        email,
        cardNo,
        creditCvc,
        creditExpiry,
        country,
        state,
        setError,
    } = props;
    console.log("Validating htmlForm...");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardNumberRegex = /^(\d{4}\s?){3}\d{4}$/;

    const cvcRegex = /^\d{3,4}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return false;
    }

    if (!cardNumberRegex.test(cardNo)) {

        setError("Please enter a valid card number (16 digits or in the format XXXX-XXXX-XXXX-XXXX)." + cardNo);
        return false;
    }

    if (!cvcRegex.test(creditCvc)) {
        setError("Please enter a valid CVC (3 or 4 digits).");
        return false;
    }

    if (!expiryRegex.test(creditExpiry)) {
        setError("Please enter a valid expiration date in MM/YY format.");
        return false;
    }

    if (country === "") {
        setError("Please enter your country name.");
        return false;
    }

    if (state === "") {
        setError("Please select a state.");
        return false;
    }

    return true;
};
