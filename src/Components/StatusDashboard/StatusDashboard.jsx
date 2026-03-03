import React from "react";
import CustomerTickets from "../CustomerTickets/CustomerTickets";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const StatusDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-8 max-w-[1200px] mx-auto">
      <div className="col-span-3">
        <CustomerTickets></CustomerTickets>
      </div>
      <div className="col-span-1">
        <TaskStatus></TaskStatus>
        <ResolvedTask></ResolvedTask>
      </div>
    </div>
  );
};

export default StatusDashboard;
