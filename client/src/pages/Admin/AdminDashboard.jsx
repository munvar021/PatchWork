import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Cards with key metrics:</p>
      <ul>
        <li>Total Reports: [Value]</li>
        <li>Avg Fix Time: [Value]</li>
        <li>% Resolved: [Value]</li>
      </ul>
      <p>Issue Heatmap and Animated statistics.</p>
    </div>
  );
};

export default AdminDashboard;
