import { faCalendar, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TicketCard = ({ status, setStatus, tasks, setTasks, ticket }) => {
  const handleTicket = (ticket) => {
    if (ticket.status === "Open") {
      setStatus("In-Progress");

      ticket.status = status;
      setTasks([...tasks, ticket]);
    }
    console.log(tasks);
  };
  return (
    <button onClick={() => handleTicket(ticket)} className="cursor-pointer">
      <div className="bg-[#FFFFFF] shadow-lg p-4 ">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{ticket.title}</h3>
          <div>
            <p
              className={`badge ${ticket.status === "Open" ? "bg-[#B9F8CF] text-[#02A53B]" : "bg-[#F8F3B9] text-[#9C7700]"}`}
            >
              <span className="">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              {ticket.status}
            </p>
          </div>
        </div>
        <p className="text-sm text-left line-clamp-2 text-gray-400 my-2">
          {ticket.description}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex gap-2">
            <p>#{ticket.id}</p>
            <p
              className={`${ticket.priority === "High" ? "text-error" : ticket.priority === "Medium" ? "text-warning" : "text-success"} uppercase`}
            >
              {ticket.priority} PRIORITY
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>{ticket.customerName}</p>
            <p className="flex items-center">
              <span className="text-xl">
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              {ticket.createdAt}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TicketCard;
