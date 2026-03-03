const TaskStatus = ({ tasks, setTasks, setTickets, setResolved }) => {
  const handleCompleted = (task) => {
    setResolved((prev) => [...prev, task]);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    setTickets((prev) => prev.filter((t) => t.id !== task.id));
  };
  return (
    <div className="mb-6">
      <h1 className="text-gray-500 text-3xl font-semibold mb-4">Task Status</h1>
      {tasks.length === 0 ? (
        <p className="text-gray-500">Select a ticket to add to Task Status</p>
      ) : (
        tasks.map((task) => (
          <div className="">
            <div className="bg-[#FFFFFF] shadow-lg p-4 mb-5">
              <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
              <div className="grid">
                <button
                  onClick={() => handleCompleted(task)}
                  className="btn bg-[#02A53B] text-white py-2 px-4"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
