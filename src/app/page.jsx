"use client";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TfiReload } from "react-icons/tfi";
import Image from "next/image";
import FlowContext from "./context/FlowContext";

const CheckoutPage = () => {
  const router = useRouter();
  const { setBillingAmount } = useContext(UserContext);
  const [noStore, setNoStore] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shippingCost, setShippingCost] = useState(null);

  const {
    checkoutCompleted,
    setCheckoutCompleted,
    paymentCompleted,
    setPaymentCompleted,
    confirmationCompleted,
    setConfirmationCompleted,
  } = useContext(FlowContext);

  useEffect(() => {
    const cachedData = localStorage.getItem("cachedData");
    if (cachedData && noStore === false) {
      setOrderDetails(JSON.parse(cachedData));
    } else {
      fetchData();
      setNoStore(false);
    }
    fetchShippingCost();
  }, [refresh]);

  const fetchData = async () => {
    const response = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/order-details"
    );
    const responseData = await response.json();
    setOrderDetails(responseData);
    localStorage.setItem("cachedData", JSON.stringify(responseData));
  };

  const fetchShippingCost = async () => {
    const cost = (Math.random() * 10).toFixed(2);
    setShippingCost(cost);
  };

  const subTotal = orderDetails?.products
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  const handleProceedToPayment = () => {
    if (user == null) {
      setBillingAmount(
        (parseFloat(subTotal) + parseFloat(shippingCost || 0)).toFixed(2)
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          billingAmount: (
            parseFloat(subTotal) + parseFloat(shippingCost || 0)
          ).toFixed(2),
        })
      );
    }
    setCheckoutCompleted(true);
    setPaymentCompleted(false);
    setConfirmationCompleted(false);
    router.push("/payment");
  };

  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Products Summary</p>
            <p
              onClick={() => {
                setNoStore(true);
                setRefresh(!refresh);
              }}
              className="text-[20px] p-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer font-normal"
            >
              New Cart
              <TfiReload className="p-1 inline-block" />
            </p>
          </div>
          <p className="text-gray-400">
            Check your items. And proceed further to payment methods.
          </p>
          <div className=" h-[90%] overflow-auto">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : orderDetails?.products.length > 0 ? (
              orderDetails?.products.map((product) => (
                <div
                  key={product.id}
                  className=" mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
                >
                  <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <Image
                      width={112}
                      height={96}
                      className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                      src={product.image}
                      alt=""
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold">{product.title}</span>
                      <span className="float-right text-gray-500">
                        <strong>Quantity :</strong> {product.quantity}
                      </span>
                      <p className="text-lg font-bold">$ {product.price} </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500 text-lg font-semibold">
                  No products in cart
                  <FaShoppingCart className="inline-block ml-2" />
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">${subTotal}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">
                  <span>${shippingCost}</span>
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                $
                {(parseFloat(subTotal) + parseFloat(shippingCost || 0)).toFixed(
                  2
                )}
              </p>
            </div>
          </div>
          {/* Disable the button if no products in cart */}
          <button
            onClick={() => {
              handleProceedToPayment();
            }}
            className={`mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white ${
              orderDetails?.products.length === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={orderDetails?.products.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
