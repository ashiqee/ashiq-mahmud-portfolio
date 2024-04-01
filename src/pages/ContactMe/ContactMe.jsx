
import { FaMobile, FaWhatsapp } from "react-icons/fa";

import { CiMail } from "react-icons/ci";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";

const ContactMe = () => {
  const form = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    // const form = e.target;
    // console.log(form);

    emailjs.sendForm('service_dxlnjif', 'template_2b2g29w', form.current, 'TzZKneGm9RQ74UGbf')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Message Sent Successfully',
          icon: "success",
          timer: 1500,

        })
        form.current.reset()
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div id="Contact" className="min-h-screen container text-white md:gap-10 p-10 mx-auto grid md:grid-cols-2 grid-cols-1  items-center">
      <div className="space-y-3 p-5 md:p-10">
        <h2 className="text-3xl uppercase">Contact <span className="text-[#00FFFF]">ME</span></h2>

        <form className="space-y-2 " ref={form} onSubmit={handleSubmit}>
          <input className="input text-black  w-full" name="from_name" placeholder="Your Name" type="text" /><br />
          <input className="input text-gray-800 input-primary w-full"
            name="user_email" placeholder="Your Email" type="email" /><br />
          <input className="input text-gray-800 input-primary w-full" name="subject" placeholder="Subject" type="text" /><br />

          <textarea className="textarea text-gray-800 textarea-bordered w-full" name="message" placeholder="Your Message" ></textarea> <br />

          <button type="submit" value='send' className="btn btn-outline text-[#00FFFF]">SEND ME</button>

        </form>
      </div>

      <div className="space-y-5 p-5 mb-20 text-sm md:text-xl md:p-10">
        <p >I am available .Connect with me via  <br />
          <b className="text-[#00FFFF]">phone/whatsapp:</b> or  <b className="text-[#00FFFF]">email:</b>
        </p>
        <span className="flex items-center gap-2 md:text-2xl">
          <span className="text-[#00FFFF]"><FaMobile /></span>  <h3>+880-01614-654397</h3>
        </span>
        <span className="flex items-center gap-2 md:text-2xl">
          <span className="text-green-500"> <FaWhatsapp /></span>  <h3>+880-01614-654397</h3>
        </span>
        <span className="flex items-center gap-2 md:text-2xl">
          <span className="text-red-400"> <CiMail /></span>  <h3>aashekmahmud@gmail.com</h3>
        </span>



      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
