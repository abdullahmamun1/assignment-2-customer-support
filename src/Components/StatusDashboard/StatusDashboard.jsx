import React, { use, useState } from "react";
import CustomerTickets from "../CustomerTickets/CustomerTickets";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const StatusDashboard = ({
  tasks,
  setTasks,
  resolved,
  setResolved,
  setProgressCount,
  ticketsPromise,
}) => {
  const ticketsData = use(ticketsPromise);
  const [tickets, setTickets] = useState(ticketsData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-11/12 mx-auto min-h-screen">
      <div className="order-2 md:order-1 col-span-3">
        <CustomerTickets
          tickets={tickets}
          setTickets={setTickets}
          setTasks={setTasks}
          tasks={tasks}
          setProgressCount={setProgressCount}
        ></CustomerTickets>
      </div>
      <div className="order-1 md:order-2 col-span-1">
        <TaskStatus
          tasks={tasks}
          setTasks={setTasks}
          resolved={resolved}
          setResolved={setResolved}
          setTickets={setTickets}
        ></TaskStatus>
        <ResolvedTask resolved={resolved}></ResolvedTask>
      </div>
    </div>
  );
};

export default StatusDashboard;
