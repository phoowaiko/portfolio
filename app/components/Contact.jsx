"use client";

import Image from "next/image";
import { useState } from "react";

import { motion } from "motion/react";

import { assets } from "@/assets/assets";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c2aebd5d-4873-46c5-8b31-dbd2a16d664c");

    setLoading(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Your message was sent successfully.");
      setLoading(false);
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Something Went Wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo">
        Connect With Me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo font-semibold">
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you!If you have any questions,comments,or
        feedback,pleasure use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Enter your name "
            required
            className="flex-1 p-3  outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Enter your email"
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          disabled={loading}
          className="py-3 px-8 w-max disabled:opacity-50 flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto disabled:hover:bg-black/60 hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px]  dark:hover:bg-darkHover">
          {loading ? (
            <>Submitting...</>
          ) : (
            <>
              Submit now
              <Image
                src={assets.right_arrow_white}
                alt="arrow"
                className="w-4"
              />
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
