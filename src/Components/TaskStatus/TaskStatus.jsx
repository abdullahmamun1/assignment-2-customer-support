import React from "react";

const TaskStatus = () => {
  return (
    <div className="mb-6">
      <h1 className="text-gray-500 text-3xl font-semibold mb-4">Task Status</h1>
      <p className="text-gray-500">Select a ticket to add to Task Status</p>
      <div className="">
        <div className="bg-[#FFFFFF] shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-2">
            Login Issues - Can't Access Account
          </h3>
          <div className="grid">
            <button className="btn bg-[#02A53B] py-2 px-4">Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
