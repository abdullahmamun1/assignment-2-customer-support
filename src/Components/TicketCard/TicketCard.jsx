import { faCalendar, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const TicketCard = ({ ticket, setTickets, setTasks }) => {
  const handleTicket = (ticket) => {
    toast("Task Added!!");
    const updatedTicket = { ...ticket, status: "In-Progress" };
    setTasks((prev) => [...prev, updatedTicket]);
    setTickets((prev) =>
      prev.map((t) => (t.id === ticket.id ? updatedTicket : t)),
    );
  };
  return (
    <button onClick={() => handleTicket(ticket)} className="cursor-pointer">
      <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-4 h-[140px] flex flex-col justify-between">
        <div className="flex justify-between">
          <h3 className="text-lg md:text-xl text-left text-black font-semibold">
            {ticket.title}
          </h3>
          <div>
            <p
              className={`badge text-sm md:text-md ${ticket.status === "Open" ? "bg-[#B9F8CF] text-[#02A53B]" : "bg-[#F8F3B9] text-[#9C7700]"}`}
            >
              <span className="">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              {ticket.status}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base text-left line-clamp-2 text-gray-400">
          {ticket.description}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <div className="flex gap-2 items-center ">
            <p>#{ticket.id}</p>
            <p
              className={`${ticket.priority === "High" ? "text-error" : ticket.priority === "Medium" ? "text-warning" : "text-success"}  uppercase`}
            >
              {ticket.priority} PRIORITY
            </p>
          </div>
          <div className="flex items-center">
            <p className="mr-2">{ticket.customerName}</p>
            <span className="text-xl">
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            {ticket.createdAt}
          </div>
        </div>
      </div>
    </button>
  );
};

export default TicketCard;
