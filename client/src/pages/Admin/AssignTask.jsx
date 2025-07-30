import React from 'react';

const AssignTask = () => {
  return (
    <div>
      <h2>Assign Task</h2>
      <p>View available technicians and their workload.</p>
      <ul>
        <li>Technician 1: Workload [X] - Assign</li>
        <li>Technician 2: Workload [Y] - Assign</li>
      </ul>
      <button>Batch Assign</button>
    </div>
  );
};

export default AssignTask;
