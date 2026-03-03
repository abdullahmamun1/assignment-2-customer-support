import React, { use } from "react";
import CustomerTickets from "../CustomerTickets/CustomerTickets";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const StatusDashboard = ({
  status,
  setStatus,
  tasks,
  setTasks,
  resolved,
  setResolved,
  ticketsPromise,
}) => {
  const ticketsData = use(ticketsPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-11/12 mx-auto min-h-screen">
      <div className="order-2 md:order-1 col-span-3">
        <CustomerTickets
          status={status}
          setStatus={setStatus}
          setTasks={setTasks}
          tasks={tasks}
          ticketsData={ticketsData}
        ></CustomerTickets>
      </div>
      <div className="order-1 md:order-2 col-span-1">
        <TaskStatus></TaskStatus>
        <ResolvedTask></ResolvedTask>
      </div>
    </div>
  );
};

export default StatusDashboard;
