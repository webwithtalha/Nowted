"use client";

import Link from "next/link";

const SignUpCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-customBlack">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-customBg">
        {/* Logo Section */}
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <span className="text-2xl font-bold cursor-pointer text-white font-yuji">
              Nowted
            </span>
          </div>

          {/* Welcome Message */}
          <h3 className="mt-3 text-xl font-poppins font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back, Nowted
          </h3>
          <p className="mt-1 text-center text-xs font-poppins text-gray-500 dark:text-gray-400">
            Welcome back! Please enter your details.
          </p>

          {/* Form Section */}
          <form>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="First Name"
                aria-label="First Name"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
              />
            </div>

            {/* Email Input */}
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            {/* Password Input */}
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            {/* Forget Password and Sign In Button */}
            <div className="flex items-center justify-between mt-4">
              <Link
                href="/forgot-password"
                className="text-sm text-gray-600 font-poppins dark:text-gray-200 hover:text-gray-500"
              ></Link>

              <button
                type="submit"
                className="px-6 py-2 text-sm font-poppins font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-800">
          <span className="text-sm text-gray-600 font-poppins dark:text-gray-200">
            Already have an account?{" "}
          </span>
          <Link
            href="/auth"
            className="mx-2 text-sm font-bold font-poppins text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
