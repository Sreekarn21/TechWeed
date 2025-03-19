"use client";

import { useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrors("All fields are required.");
      return;
    }
    setErrors("");
    alert("Message Sent! (Functionality yet to be implemented)");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg text-gray-300 mb-6">Have questions? Fill out the form below.</p>

      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>General Inquiry</option>
            <option>Course Info</option>
            <option>Collaboration</option>
            <option>Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors && <p className="text-red-400">{errors}</p>}
          <button type="submit" className="w-full bg-blue-600 py-2 rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-6">
        <p className="text-gray-400">Or reach us at:</p>
        <a href="mailto:techweedstartup@gmail.com" className="text-blue-400 hover:underline">
          techweedstartup@gmail.com
        </a>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 flex space-x-6">
        <a href="https://www.linkedin.com/company/techweed-com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-3xl hover:text-blue-500" />
        </a>
        <a href="https://www.instagram.com/_techweed_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-3xl hover:text-pink-500" />
        </a>
      </div>
    </div>
  );
}
