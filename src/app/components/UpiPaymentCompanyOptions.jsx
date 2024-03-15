import { useContext, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaGooglePay, FaAmazonPay, FaPaypal } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import UpiPaymentCredentials from "./UpiPaymentCompanyCredentials";
import Payment from "../payment/page";
import { UserContext } from "../context/UserContext";
const paymentOptions = [
  { icon: FaGooglePay, name: "Google Pay" },
  { icon: FaAmazonPay, name: "Amazon Pay" },
  { icon: FaPaypal, name: "PayPal" },
  { icon: SiPaytm, name: "PayTM" },
];

export default function UpiPaymentOptions() {
  const [openOption, setOpenOption] = useState(null);
  const { billingAmount } = useContext(UserContext);

  const toggleOption = (index) => {
    setOpenOption(openOption === index ? null : index);
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="mt-10 bg-gray-50 px-4 pt-8 pb-6 lg:mt-0">
      <p className="text-xl font-medium">Payment Details</p>
      <p className="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <div className=" w-full mx-auto">
        {paymentOptions.map((option, index) => (
          <div key={index}>
            <div
              className={`border-b-4 flex gap-2 items-center justify-center cursor-pointer transition-all  ease-in-out ${
                openOption === index ? "bg-gray-100" : ""
              }`}
              onClick={() => toggleOption(index)}
            >
              <option.icon size={70} className="p-2 border-r-2" />
              <p className="text-xl text-center mx-auto">{option.name}</p>
              <RiArrowDropDownLine
                size={70}
                className={`p-2 ${
                  openOption === index ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {openOption === index && (
              <div className="border-b-4 w-full flex gap-2 items-center justify-center bg-gray-100">
                <UpiPaymentCredentials paymentCompany={option.name} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className=" font-bold text-xl text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">${billingAmount}</p>
      </div>
    </div>
  );
}
