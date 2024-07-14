import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaTabletAlt } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="flex flex-col gap-28">
      <div>
        <div className="relative w-screen h-[500px]">
          <img
            src="https://themewagon.github.io/beko/img/breadcrumb.png"
            alt="Logo"
            className="h-full w-full object-cover"
          />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-Aclonica text-8xl">
            Contact
          </h1>
        </div>
      </div>

      <div className="w-screen h-[400px] flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9869195651168!2d85.38018867975539!3d27.71769013888099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b0f353a358b%3A0xdc60e87f8624cccb!2zU2hpdmEgQ2hvd2sgTWVkaWNhbCBIYWxsICjgpLbgpL_gpLXgpJrgpYvgpJUg4KSu4KWH4KSh4KS_4KSV4KSyIOCkueCksik!5e0!3m2!1sen!2snp!4v1720718393750!5m2!1sen!2snp"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className=" w-3/4 h-full"
          title="Map"
        ></iframe>
      </div>

      <div className="flex gap-10 w-screen font-Aclonica justify-center">
        <div className="flex flex-col gap-4 basis-1/2">
          <textarea
            className="border h-56 max-h-56 min-h-56  pl-2 placeholder:text-sm pt-2"
            placeholder="Enter Message"
          ></textarea>
          <div className="flex gap-5 h-12">
            <input
              className="border basis-1/2  pl-2 placeholder:text-sm"
              placeholder="Name"
            ></input>
            <input
              className="border basis-1/2  pl-2 placeholder:text-sm"
              placeholder="Email Address"
            ></input>
          </div>
          <input
            className="border h-12 pl-2 placeholder:text-sm"
            placeholder="Enter Subject"
          ></input>
          <button className="pl-2 h-12 cursor-pointer w-44 text-white bg-gradient-to-r from-red-600 to-pink-500">
            Send Message
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div>
              <IoHomeOutline size={30} />
            </div>
            <div>
              <p>Kathmandu, Nepal</p>
              <p className="font-Poppins font-light text-gray-500">
                Rosemead, CA 910
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <FaTabletAlt size={30} />
            </div>
            <div>
              <p>Kathmandu, Nepal</p>
              <p className="font-Poppins font-light text-gray-500">
                Mon to Fri 9am to 6pm
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <CiMail size={30} />
            </div>
            <div>
              <p>Kathmandu, Nepal</p>
              <p className="font-Poppins font-light text-gray-500">
                Send us your query anytime!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center">
        <div className="flex gap-2 w-3/4 font-Aclonica">
          <div className="flex flex-col gap-6 basis-72">
            <div>
              <img
                src="https://themewagon.github.io/beko/img/logo.png"
                alt="Logo"
              ></img>
            </div>
            <p className="text-sm font-Poppins text-gray-400">
              Heaven fruitful doesn't over lesser days appear creeping seasons
              so behold bearing days open
            </p>
          </div>
          <div className="flex flex-col gap-6 basis-72">
            <p>Contact Info</p>
            <div className="flex flex-col gap-2 text-sm font-Poppins text-gray-400">
              <p>
                Address : Your address goes here, your demo address. Bangladesh.
              </p>
              <p>Phone : +8880 44338899</p>
              <p>Email : info@colorlib.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 basis-44">
            <p>Important Link</p>
            <div className="flex flex-col gap-2 text-xs font-Poppins text-gray-400">
              <Link>WHMCS-bridge</Link>
              <Link>Search Domain</Link>
              <Link>My Account</Link>
              <Link>Shopping Cart</Link>
              <Link>Our Shop</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 basis-72">
            <p>Newsletter</p>
            <div className="flex flex-col gap-6">
              <p className="text-sm font-Poppins text-gray-400">
                Heaven fruitful doesn't over lesser in days. Appear creeping
                seasons deve behold bearing days open
              </p>
              <div className="flex">
                <input
                  className="text-sm placeholder:text-sm placeholder:font-thin p-2 bg-slate-100"
                  placeholder="Email Address"
                ></input>
                <button className="p-3 cursor-pointer bg-gradient-to-r from-red-600 to-pink-500 font-bold">
                  <PiTelegramLogo color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
