import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/Auth/PrivateRoute';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

// Citizen Pages
import HomePage from '../pages/Citizen/HomePage';
import ReportIssue from '../pages/Citizen/ReportIssue';
import MyReports from '../pages/Citizen/MyReports';
import MapView from '../pages/Citizen/MapView';

// Technician Pages
import AssignedIssues from '../pages/Technician/AssignedIssues';
import TaskHistory from '../pages/Technician/TaskHistory';

// Admin Pages
import AdminDashboard from '../pages/Admin/AdminDashboard';
import ManageIssues from '../pages/Admin/ManageIssues';
import AssignTask from '../pages/Admin/AssignTask';
import Analytics from '../pages/Admin/Analytics';
import UserManagement from '../pages/Admin/UserManagement';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes (or routes accessible to all roles) */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/map" element={<MapView />} />

      {/* Citizen Routes */}
      <Route
        path="/report"
        element={<PrivateRoute allowedRoles={['citizen']}><ReportIssue /></PrivateRoute>}
      />
      <Route
        path="/myreports"
        element={<PrivateRoute allowedRoles={['citizen']}><MyReports /></PrivateRoute>}
      />

      {/* Technician Routes */}
      <Route
        path="/technician/issues"
        element={<PrivateRoute allowedRoles={['technician']}><AssignedIssues /></PrivateRoute>}
      />
      <Route
        path="/technician/history"
        element={<PrivateRoute allowedRoles={['technician']}><TaskHistory /></PrivateRoute>}
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={<PrivateRoute allowedRoles={['admin']}><AdminDashboard /></PrivateRoute>}
      />
      <Route
        path="/admin/issues"
        element={<PrivateRoute allowedRoles={['admin']}><ManageIssues /></PrivateRoute>}
      />
      <Route
        path="/admin/assign"
        element={<PrivateRoute allowedRoles={['admin']}><AssignTask /></PrivateRoute>}
      />
      <Route
        path="/admin/analytics"
        element={<PrivateRoute allowedRoles={['admin']}><Analytics /></PrivateRoute>}
      />
      <Route
        path="/admin/users"
        element={<PrivateRoute allowedRoles={['admin']}><UserManagement /></PrivateRoute>}
      />

      {/* Fallback for unknown routes */}
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  );
};

export default AppRoutes;
