const ResolvedTask = ({ resolved }) => {
  return (
    <div className="mb-6">
      <h1 className="text-gray-500 text-3xl font-semibold mb-4">
        Resolved Task
      </h1>
      {resolved.length === 0 ? (
        <p className="text-gray-500">No resolved tasks yet.</p>
      ) : (
        resolved.map((task) => (
          <div>
            <div className="bg-[#E0E7FF] shadow-lg p-3 mb-5 rounded-lg">
              <h3 className="text-lg text-black font-semibold">{task.title}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ResolvedTask;
