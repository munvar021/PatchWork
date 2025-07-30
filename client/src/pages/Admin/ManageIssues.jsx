import React from 'react';

const ManageIssues = () => {
  return (
    <div>
      <h2>Manage Issues</h2>
      <p>Filterable master table of issues.</p>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Severity</th>
            <th>Assigned Technician</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[Image]</td>
            <td>High</td>
            <td>John Doe</td>
            <td>Edit/Assign/Close</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageIssues;
