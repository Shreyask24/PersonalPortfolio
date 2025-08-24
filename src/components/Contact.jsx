import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_gbr83nn",
        "template_jfgvptn",
        {
          from_name: form.name,
          to_name: "Shreyas",
          from_email: form.email,
          to_email: "kshreyas495@gmail.com",
          message: form.message,
        },
        "YVxfk7mYu53kjrima"
      )
      .then(() => {
        setLoading(false);
        toast.success(
          "Thank you for reaching out! I’ll get back to you shortly.",
          {
            duration: 4000,
            position: "bottom-right",
            style: {
              background: "#1E293B", // slate-800
              color: "#F8FAFC", // slate-50
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "12px",
              padding: "20px 16px",
              width: "430px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            },
            iconTheme: {
              primary: "#10B981", // emerald-500
              secondary: "#fff",
            },
          }
        );

        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Something went wrong!");
        console.error(error);
      });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Contact</p>

        <h2 className={styles.sectionSubText}>Get in touch with me.</h2>
      </motion.div>

      <p className="text-secondary text-sm mt-6 max-w-xl font-bold capitalize text-justify">
        I usually respond within 24 hours. Feel free to reach out regarding web
        development projects, frontend engineering roles, or collaborations. You
        can also email me directly at
        <a
          href="mailto:hello.shreyasdevx@gmail.com"
          className="text-white underline ml-1 normal-case"
        >
          hello.shreyasdevx@gmail.com
        </a>
      </p>

      <div
        className="xl:mt-10 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden"
      >
        <div className="flex-[0.75] bg-black-100 p-5 md:p-8 mt-5 md:mt-0 rounded-2xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-4 md:h-[83vh] h-[85vh]"
          >
            <label className="flex flex-col ">
              <span className="text-white font-medium mb-4">Full Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="bg-tertiary py-4 px-6
               placeholder:text-secondary
                text-white rounded-lg outline-none border-none
                font-medium"
              />
            </label>

            <label className="mt-12 flex flex-col ">
              <span className="text-white font-medium mb-4">Email Address</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="bg-tertiary py-4 px-6
               placeholder:text-secondary
                text-white rounded-lg outline-none border-none
                font-medium"
              />
            </label>

            <label className="mt-12 flex flex-col ">
              <span className="text-white font-medium mb-4">Message</span>

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="bg-tertiary py-4 px-6
               placeholder:text-secondary
                text-white rounded-lg outline-none border-none
                font-medium resize-none"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit
           text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
