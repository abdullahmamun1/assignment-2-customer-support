import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#000000]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20 max-w-11/12 mx-auto py-20 text-gray-400">
        <div className="col-span-1 md:col-span-4">
          <h2 className="text-3xl text-white font-semibold mb-4">
            CS — Ticket System
          </h2>
          <p>
            A Customer Support Ticket Tracking App is a centralized platform
            designed to capture, organize, and resolve customer inquiries with
            efficiency and precision. By assigning unique IDs to every request,
            it ensures seamless communication, clear accountability, and
            real-time status visibility from start to finish. This streamlined
            approach eliminates manual chaos, allowing teams to prioritize
            urgent issues and maintain a high standard of service. It is the
            essential tool for turning customer challenges into structured,
            data-driven solutions that foster long-term loyalty and professional
            growth.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 list-none">
          <h3 className="text-xl text-white font-normal mb-4">Company</h3>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Our Mission</a>
          </li>
          <li>
            <a href="">Contact Saled</a>
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 list-none">
          <h3 className="text-xl text-white font-normal mb-4">Services</h3>
          <li>
            {" "}
            <a href="">Products & Services</a>
          </li>
          <li>
            <a href="">Customer Stories</a>
          </li>
          <li>
            <a href="">Download Apps</a>
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 list-none">
          <h3 className="text-xl text-white font-normal mb-4">Information</h3>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            {" "}
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            {" "}
            <a href="">Join Us</a>
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 list-none">
          <h3 className="text-xl text-white font-normal mb-4">Social Links</h3>
          <li>
            {" "}
            <a href="">
              <span className="badge badge-circle mr-2">
                <FontAwesomeIcon icon={faXTwitter} />
              </span>
              @CS — Ticket System
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <span className="badge badge-circle mr-2">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
              @CS — Ticket System
            </a>
          </li>
          <li>
            <a href="">
              <span className="badge badge-circle mr-2">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              @CS — Ticket System
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <span className="badge badge-circle mr-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              support@cst.com
            </a>
          </li>
        </div>
      </div>
      <hr className="w-11/12 mx-auto" />
      <div className="py-8">
        <p className="text-white text-center">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
