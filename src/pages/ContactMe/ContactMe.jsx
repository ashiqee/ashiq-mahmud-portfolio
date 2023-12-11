import React from "react";

const ContactMe = () => {
  return (
    <div className="min-h-screen container p-10 mx-auto grid md:grid-cols-2 grid-cols-1  items-center">
      <div className="space-y-3">
        <h2 className="text-3xl uppercase">Contact <span className="text-[#00FFFF]">ME</span></h2>
        <p>I am available .Connect with me vai phone: <br />
          <b className="text-[#00FFFF]">+880-1614-654397</b> or email: <b className="text-[#00FFFF]">aashekmahmud@gmail.com</b>
        </p>
        <form className="space-y-2" action="">
          <input className="input input-primary w-full" placeholder="Your Name" type="text" /><br />
          <input className="input input-primary w-full" placeholder="Your Email" type="email" /><br />
          <input className="input input-primary w-full" placeholder="Subject" type="text" /><br />

          <textarea className="textarea textarea-bordered w-full" placeholder="Your Message" ></textarea> <br />

          <button type="submit" className="btn btn-outline text-[#00FFFF]">SEND ME</button>

        </form>
      </div>

      <div>

      </div>
    </div>
  );
};

export default ContactMe;
