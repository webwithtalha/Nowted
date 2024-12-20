"use client";

import React, { useState } from "react";
import Link from "next/link";
import { userService } from "../../services/userService";
import { toast } from "react-toastify";

const SignUpCard = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      await userService.createUser(formData);
      toast.success("User created successfully");
      setSuccess("User created successfully! You can now log in.");
      setFormData({ username: "", email: "", password: "" });
    } catch (err) {
      setError((err as Error).message || "Failed to create user.");
    } finally {
      setLoading(false);
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
            Create Your Account
          </h3>
          <p className="mt-1 text-center text-xs font-poppins text-gray-500 dark:text-gray-400">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit}>
          <div className="w-full mt-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
            </div>

            <div className="w-full mt-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
             className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
            </div>
            
            <div className="w-full mt-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
          {success && <p className="mt-4 text-sm text-green-500">{success}</p>}
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-800">
          <span className="text-sm text-gray-600 font-poppins dark:text-gray-200">
            Already have an account?{" "}
          </span>
          <Link
            href="/auth/sign-in"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;