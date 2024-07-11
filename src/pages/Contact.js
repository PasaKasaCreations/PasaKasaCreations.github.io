import React from "react";

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
        ></iframe>
      </div>

      <div className="flex gap-10 w-screen font-Aclonica justify-center">
        <div className="flex flex-col gap-4 basis-1/2">
          <textarea
            className="border h-56 max-h-56 min-h-56  pl-2"
            placeholder="Enter Message"
          ></textarea>
          <div className="flex gap-5 h-12">
            <input
              className="border basis-1/2  pl-2"
              placeholder="Name"
            ></input>
            <input
              className="border basis-1/2  pl-2"
              placeholder="Email Address"
            ></input>
          </div>
          <input className="border h-12 pl-2" placeholder="Subject"></input>
          <input
            className="border h-14 cursor-pointer w-96"
            type="submit"
            value="Send Message"
          ></input>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div>
              <p>Icon</p>
            </div>
            <div>
              <p>Kathmandu, Nepal</p>
              <p>Rosemead, CA910</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <p>Icon</p>
            </div>
            <div>
              <p>Kathmandu, Nepal</p>
              <p>Rosemead, CA910</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <p>Icon</p>
            </div>
            <div>
              <p>Kathmandu, Nepal</p>
              <p>Rosemead, CA910</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
