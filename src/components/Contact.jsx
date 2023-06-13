import styles, { layout } from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "D.I.Y club",
          from_email: form.email,
          to_email: "example@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
    return (
  <section id="contact" className={`${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} ${styles.boxWidth} flex-col`}>
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#fccbcd] p-8 rounded-2xl'
      >
        <h2 className={`${styles.heading2} text-black `}>
        Use this form to reach Us<br className="sm:block hidden" />
      </h2>
        

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-yellow-50 py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-yellow-50 py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-yellow-50 py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#f87272]  py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#f87272]'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      
    </div>
  </section>
);
}
export default Contact;
