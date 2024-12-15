"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { userService } from "../../services/userService";

const SignInCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const result = await userService.loginUser(email.trim(), password.trim());
    const { success, message } = result;
  
    if (success) {
      router.push("/");
    } else {
      setErrorMsg(message || "Invalid credentials");
    }
  };
  
  
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-customBlack">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-customBg">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <span className="text-2xl font-bold cursor-pointer text-white font-yuji">
              Nowted
            </span>
          </div>

          <h3 className="mt-3 text-xl font-poppins font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back, Nowted
          </h3>
          <p className="mt-1 text-center text-xs font-poppins text-gray-500 dark:text-gray-400">
            Welcome back! Please enter your details.
          </p>
          
          {errorMsg && (
            <div className="text-center text-red-500 text-sm font-poppins mt-2">
              {errorMsg}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link
                href="/forgot-password"
                className="text-sm text-gray-600 font-poppins dark:text-gray-200 hover:text-gray-500"
              >
                Forget Password?
              </Link>

              <button
                type="submit"
                className="px-6 py-2 text-sm font-poppins font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 
                  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-800">
          <span className="text-sm text-gray-600 font-poppins dark:text-gray-200">
            Don&apos;t have an account?{" "}
          </span>
          <Link
            href="/auth/sign-up"
            className="mx-2 text-sm font-bold font-poppins text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
