"use client";
import { useState } from "react";

import axios from "axios";
import base_url from "../helper/helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";
import { message } from 'antd';
import 'antd/dist/reset.css';
export default function Register() {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formdata = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        dateOfBirth: formData.dob,
        specialization: formData.specialization,
      };
      const response = await axios.post(
        base_url + "/api/auth/register",
        formdata
      );

      if (response.data) {
        // toast.success("Registered successfully!", { position: "bottom-right" });
        message.success("Register successfully. Please check your email for verification.");
        setFormData({
          name: "",
          email: "",
          password: "",
          phone: "",
          dob: "",
          specialization: "",
        });

        setError(false);
        router.push("/login");
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-[20px]">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Name"
            />
          </div>

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
              placeholder="Enter Your Email"
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
              placeholder="Enter Your Password"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-700 font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Phone Number"
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="block text-gray-700 font-medium">
              Specialization
            </label>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select specialization
              </option>

              <option value="tech">Tech</option>
              <option value="govern">Govt</option>
              <option value="bank">Bank</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" cursor-pointer w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>

          {err && (
            <>
              <div>
                <h1 className=" text-center text-red-500 text-2xl">
                  Error In Registration
                </h1>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
