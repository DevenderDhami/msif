"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d{0,10}$/.test(value)) return;
      if (value.length === 10) {
        setPhoneError("");
      } else {
        setPhoneError("Phone number must be exactly 10 digits");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    setIsSubmitting(true);

    console.log("Form Data Submitted:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6  shadow-lg rounded-lg">
      <h2 className="text-center text-2xl pb-4 theme-clr font-bold">
        Feel free to reach us !
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          pattern="\d{10}"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 bg-[#ff1f59] text-white font-semibold rounded-lg focus:outline-none focus:ring-2 hover:shadow-lg ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
