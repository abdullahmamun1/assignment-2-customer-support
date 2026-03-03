import { faCalendar, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CustomerTickets = () => {
  return (
    <div>
      <h1 className="text-gray-500 text-3xl font-semibold mb-4">
        Customer Tickets
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#FFFFFF] shadow-lg p-4 ">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">
              Login Issues - Can't Access Account
            </h3>
            <div>
              <p className="badge bg-[#B9F8CF] text-[#02A53B] ">
                <span className="">
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                Open
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400 my-2">
            Customer is unable to log in to their account. They've tried
            resetting their password multiple times but still...
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <div className="flex gap-2">
              <p>#1001</p>
              <p className="text-error">HIGH PRIORITY</p>
            </div>
            <div className="flex items-center gap-2">
              <p>John Smith</p>
              <p className="flex items-center">
                <span className="text-xl">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                1/15/2024
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] shadow-lg p-4 ">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">
              Login Issues - Can't Access Account
            </h3>
            <div>
              <p className="badge bg-[#B9F8CF] text-[#02A53B] ">
                <span className="">
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                Open
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400 my-2">
            Customer is unable to log in to their account. They've tried
            resetting their password multiple times but still...
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <div className="flex gap-2">
              <p>#1001</p>
              <p className="text-error">HIGH PRIORITY</p>
            </div>
            <div className="flex items-center gap-2">
              <p>John Smith</p>
              <p className="flex items-center">
                <span className="text-xl">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                1/15/2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
