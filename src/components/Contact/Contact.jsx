import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, message } = formData;

  if (!name || !email || !message) {
    toast.error("Please fill in all fields 😓");
    return;
  }

  try {
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("message", message);

    const res = await axios.post("https://saaddevbackend.onrender.com/contact/", form);

    console.log("Response data:", res.data);

    if (res.data.status === "success") {
      toast.success("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error(`Something went wrong 🥺: ${res.data.message || ""}`);
    }
  } catch (error) {
    toast.error("Network error 😢");
    console.error("Error sending message:", error);
  }
};


  return (
    <section id="contact" className="relative">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121212] to-[#1a1a1a] px-4 py-12">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Me 📬
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message 💌
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
