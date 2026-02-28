"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { registerUser } from "../redux/userslice";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function SignUp() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { loading, error, user } = useAppSelector((state) => state.user);

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    country: "",
    accountNumber: "",
    accountName: "",
    accountBank: "",
    email: "",
    password: "",
    packages: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.fullname || !formData.email || !formData.password)) {
      alert("Please complete all fields.");
      return;
    }

    if (step === 2 && !formData.phoneNumber) {
      alert("Phone number is required.");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-green-500 shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          Affiliate Sign Up
        </h2>

        <p className="text-center text-sm text-gray-500 mb-6">
          Step {step} of 3
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Step 1 */}
          {step === 1 && (
            <>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                required
              />
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
              <input
                type="text"
                name="accountBank"
                placeholder="Account Bank"
                value={formData.accountBank}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <input
                type="text"
                name="accountName"
                placeholder="Account Name"
                value={formData.accountName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              >
                <option value="">Select Country</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
              </select>

              <input
                type="text"
                name="accountNumber"
                placeholder="Account Number"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              <select
                name="packages"
                value={formData.packages}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              >
                <option value="">Package</option>
                <option value="2500">2500</option>
                <option value="5000">5000</option>
              </select>
            </>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 bg-black-500 text-white-500 rounded-lg hover:bg-gray-400"
              >
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 bg-black-600 text-white-500  rounded-lg "
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? "Registering..." : "Submit"}
              </button>
            )}
          </div>
        </form>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
        )}

        {user && (
          <p className="text-red-500 text-sm mt-4 text-center">
            Welcome, {user.fullname}!
          </p>
        )}

        <p className="text-center text-white-500 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
    </Layout>
  );
}