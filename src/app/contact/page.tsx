"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          setError("Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={sendEmail}
        className="bg-white shadow-lg p-8 rounded-md w-full max-w-xl space-y-4"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>

        {success && <p className="text-green-600 text-center">{success}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full border p-2 rounded"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
