import React from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    emailjs
      .sendForm(
        "service_wzf5xb8",   // Replace with your Service ID
        "template_mr32ytb", // Replace with your Template ID
        form,
        "qzY38JSYHy5yNlSL1"   // Replace with your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>

      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
