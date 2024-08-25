import React from "react";
import Heading from "../components/Heading";
import ContactCard from "../components/ContactCard";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div id="contact" className=" px-5 flex flex-col gap-12 bg-[#F5F6F8] py-10">
      <div className="flex flex-col items-center gap-4">
        <Heading heading={"Contact"} />
        <p>Have a project in mind? Let’s bring it to life!</p>
      </div>

      <div className="flex flex-col gap-7 md:flex-row">
        <div className="flex flex-col gap-7 basis-1/2 shadow-md shadow-gray p-4 border-t-2 border-b-2 border-blue-500">
          <ContactCard
            icon={<CiLocationOn />}
            title={"Address"}
            description={"Kshitij Marg, Kathmandu, Nepal"}
          />
          <ContactCard
            icon={<IoCallOutline />}
            title={"Call Us"}
            description={"+977-9862751805"}
          />
          <ContactCard
            icon={<MdOutlineEmail />}
            title={"Email Us"}
            description={"pasakasacreations@gmail.com"}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220.8259967397178!2d85.33353046044961!3d27.679719781325108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c02d9eeb29%3A0x310e24f59ede33b!2sChhitijnagar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1724569675747!5m2!1sen!2snp"
            title="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-60"
          ></iframe>
        </div>

        <form className="flex flex-col gap-5 px-4 basis-1/2 shadow-md shadow-gray p-2 border-t-2 border-b-2 border-blue-500">
          <div className="flex flex-col md:flex-row gap-5 md:justify-between">
            <div className="flex flex-col gap-2 md:basis-1/2">
              <p>Your Name</p>
              <input
                required
                type="text"
                className="border outline-none p-2 focus:outline-blue-300"
              />
            </div>
            <div className="flex flex-col gap-2 md:basis-1/2">
              <p>Your Email</p>
              <input
                required
                type="email"
                className="border outline-none p-2 focus:outline-blue-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Subject</p>
            <input
              required
              type="text"
              className="border outline-none p-2 focus:outline-blue-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Message</p>
            <textarea
              required
              className="border outline-none p-2 focus:outline-blue-300 max-h-52 min-h-52"
            />
          </div>
          <input
            type="submit"
            value="Send Message"
            className="bg-blue-400 text-white rounded-full px-7 h-10 cursor-pointer self-center hover:bg-blue-300"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
