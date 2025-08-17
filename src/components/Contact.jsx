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

    setForm({ ...form, [name]: [value] });
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
        toast.success("Thank you. I Will Get Back To You As Soon As Possible.");

        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            toast.error("Something Went Wrong!");
          }
        );
      });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Contact</p>

        <h2 className={styles.sectionSubText}>Get In Touch</h2>
      </motion.div>

      <div
        className="xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden"
      >
        <div
          className="flex-[0.75] bg-black-100 p-8 
        rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-2 flex flex-col gap-4 h-[90vh]"
          >
            <label className="mt-5 flex flex-col ">
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
