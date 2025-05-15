"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import base_url from "../helper/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/auth";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const router = useRouter();
  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formdata = {
        identifier: formData.email,
        password: formData.password,
      };
      const response = await axios.post(base_url + "/api/auth/login", formdata);

      if (response.data) {
        toast.success("Login successfully!", { position: "bottom-right" });
        setFormData({ email: "", password: "" });

        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(response.data));
        setError(false);
        router.push("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!", {
        position: "bottom-right",
      });
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center  px-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-md p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {err && (
            <p className="text-center text-red-500 font-semibold text-sm">
              Error in login. Please check your credentials.
            </p>
          )}
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          New here?{" "}
          <Link href="/register" className="text-orange-500 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
