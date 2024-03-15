"use client";
import { useContext, useState } from "react";
import FlowContext from "../context/FlowContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Flow = () => {
  // Initialize states for each step
  const {
    checkoutCompleted,
    setCheckoutCompleted,
    paymentCompleted,
    setPaymentCompleted,
    confirmationCompleted,
    setConfirmationCompleted,
  } = useContext(FlowContext);

  return (
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <div className="relative">
          <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
            <li
              className={`flex items-center space-x-3 text-left sm:space-x-4 ${
                checkoutCompleted ? "text-emerald-700" : "text-gray-900"
              }`}
            >
              <a
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  checkoutCompleted
                    ? "bg-emerald-200 text-xs font-semibold text-emerald-700"
                    : "bg-gray-200 text-xs font-semibold text-gray-700"
                }`}
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    paymentCompleted ? "text-emerald-700" : "text-gray-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <Link href="/">
                <span className="font-semibold">Checkout</span>
              </Link>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${
                paymentCompleted ? "text-emerald-700" : "text-gray-400"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li
              className={`flex items-center space-x-3 text-left sm:space-x-4 ${
                paymentCompleted ? "text-emerald-700" : "text-gray-900"
              }`}
            >
              <a
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  paymentCompleted
                    ? "bg-emerald-200 text-xs font-semibold text-emerald-700"
                    : "bg-gray-200 text-xs font-semibold text-gray-700"
                }`}
                href="#"
              >
                2
              </a>
              <span className="font-semibold">Payment</span>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${
                confirmationCompleted ? "text-emerald-700" : "text-gray-400"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li
              className={`flex items-center space-x-3 text-left sm:space-x-4 ${
                confirmationCompleted ? "text-emerald-700" : "text-gray-900"
              }`}
            >
              <a
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  confirmationCompleted
                    ? "bg-emerald-200 text-xs font-semibold text-emerald-700"
                    : "bg-gray-200 text-xs font-semibold text-gray-700"
                }`}
                href="#"
              >
                3
              </a>
              <span className="font-semibold">Confirmation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Flow;
