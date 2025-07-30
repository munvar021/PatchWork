import React from 'react';

const ReportIssue = () => {
  return (
    <div>
      <h2>Report an Issue</h2>
      <form>
        <div>
          <label>Description:</label>
          <textarea />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" />
        </div>
        <div>
          <label>Upload Image:</label>
          <input type="file" />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" placeholder="Auto-detect or select on map" />
        </div>
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportIssue;
