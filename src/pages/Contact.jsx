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
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="flex flex-col gap-7 md:flex-row">
        <div className="flex flex-col gap-7 basis-1/2 shadow-md shadow-gray p-4 border-t-2 border-b-2 border-blue-500">
          <ContactCard
            icon={<CiLocationOn />}
            title={"Address"}
            description={"A108 Adam Street, New York, NY 535022"}
          />
          <ContactCard
            icon={<IoCallOutline />}
            title={"Call Us"}
            description={"+1 5589 55488 55"}
          />
          <ContactCard
            icon={<MdOutlineEmail />}
            title={"Email Us"}
            description={"info@example.com"}
          />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3532.6592629474626!2d85.38332010794466!3d27.69692428643738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1723134649771!5m2!1sen!2snp"
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
