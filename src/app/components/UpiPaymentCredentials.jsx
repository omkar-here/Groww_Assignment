"use client";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";
import FlowContext from "../context/FlowContext";

const UpiPaymentCredentials = ({ paymentCompany }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("@okicici");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const { setUpiId, setPaymentCompany } = useContext(UserContext);
  const router = useRouter();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const {
    checkoutCompleted,
    setCheckoutCompleted,
    paymentCompleted,
    setPaymentCompleted,
  } = useContext(FlowContext);

  const handleItemClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleProceed = () => {
    if (!id.trim()) {
      setError("UPI ID cannot be empty");
      return;
    }

    setPaymentCompleted(true);
    setError(""); // Clear any previous error

    console.log("Proceeding with UPI payment...");
    console.log("UPI ID:", id + selectedValue);
    setUpiId(id + selectedValue);
    setPaymentCompany(paymentCompany);
    router.push("/orderConfirmation");
  };

  const options = ["@okicici", "@okhdfcbank", "@oksbi", "@okaxis"];

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex items-center gap-2">
        <h1 className="text-sm font-bold text-gray-800">{paymentCompany}</h1>
      </div>

      <div>
        <input
          onChange={(e) => setId(e.target.value)}
          type="text"
          className="mt-4 p-2 border-2 w-[70%] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          placeholder="Enter UPI ID"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn p-2 m-1"
            onClick={toggleDropdown}
            onKeyDown={(e) => e.key === "Enter" && toggleDropdown()}
          >
            {selectedValue || options[0]}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 max-w-52 sm:min-w-52"
            >
              {options.map((option, index) => (
                <li key={index}>
                  <a onClick={() => handleItemClick(option)}>{option}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Keep {paymentCompany} mobile app handy to complete payment
      </p>

      <button
        onClick={() => handleProceed()}
        className=" self-end px-16 max-w-[80%] mt-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        PROCEED
      </button>
    </div>
  );
};

export default UpiPaymentCredentials;
