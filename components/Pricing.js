import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const services = [
    {
      title: "Airtime Topup",
      items: [
        "MTN – 2.5% Profit",
        "Glo – 3% Profit",
        "Airtel – 3% Profit",
        "9mobile – 3% Profit",
        "Example: ₦1000 MTN → ₦25 Profit",
      ],
    },
    {
      title: "Recharge Card (ePIN)",
      items: [
        "MTN – 0.5%",
        "Glo – 1%",
        "Airtel – 1%",
        "9mobile – 4%",
        "Example: ₦1000 9mobile → ₦40 Profit",
      ],
    },
    {
      title: "Data Subscription",
      items: [
        "Dynamic Pricing",
        "Set your own selling price",
        "Example: Buy ₦280 → Sell ₦320",
        "Profit: ₦40",
      ],
    },
    {
      title: "Cable TV",
      items: [
        "DStv – 1%",
        "GOtv – 1%",
        "Startimes – 1.5%",
        "Example: ₦5000 → ₦50 Profit",
      ],
    },
    {
      title: "Electricity Bills",
      items: [
        "0.8% – 1.5% Discount",
        "Example: ₦10,000 → ₦100 Profit",
        "Instant Token Delivery",
      ],
    },
    {
      title: "Betting Wallet Funding",
      items: [
        "0.2% API Discount",
        "Example: ₦10,000 → ₦20 Profit",
        "All Major Platforms Supported",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 w-full py-16" id="pricing">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto text-center">

        <ScrollAnimationWrapper>
          <motion.h2
            variants={scrollAnimation}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Our VTU Services & Profit Structure
          </motion.h2>

          <motion.p
            variants={scrollAnimation}
            className="w-10/12 sm:w-7/12 lg:w-6/12 mx-auto text-gray-600 mb-12"
          >
            Earn profit on every transaction. Airtime, Data, Cable TV,
            Electricity and Betting funding with competitive margins.
          </motion.p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={index}>
              <motion.div
                variants={scrollAnimation}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg rounded-xl p-8 text-left border"
              >
                <h3 className="text-xl font-semibold mb-4 text-black">
                  {service.title}
                </h3>

                <ul className="space-y-2 text-gray-600">
                  {service.items.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>

                <button className="mt-6 w-full bg-orange-500 text-white-500 py-2 rounded-lg hover:bg-orange-600 transition">
                  Start Selling
                </button>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;