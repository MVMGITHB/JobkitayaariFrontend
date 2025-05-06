"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import base_url from "../helper/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setFormData({
          email: "",
          password: "",
        });

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
      toast.error(error.response?.data?.message || "Registration failed!", {
        position: "bottom-right",
      });

      console.log(error.response?.data?.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex  justify-center bg-gray-100 px-4 pt-[20px]">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white h-[400px] shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          <Link href={"/login"}>Login/</Link>
          <Link href={"/register"}>Register</Link>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

          {err && (
            <>
              <div>
                <h1 className=" text-center text-red-500 text-2xl">
                  Error In Login
                </h1>
              </div>
            </>
          )}
        </form>

        <h1 className="text-blue-400 pt-2">
          <Link href={"/register"}>
            If not account please{" "}
            <span className=" text-orange-300"> Register Now</span>{" "}
          </Link>
        </h1>
      </div>
    </div>
  );
}
