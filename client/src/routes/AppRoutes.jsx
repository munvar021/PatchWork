import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/Auth/PrivateRoute';
import Login from '../components/Auth/Login/login';
import Register from '../components/Auth/Register/register';

// Citizen Pages
import HomePage from '../pages/Home/home';
import ReportIssue from '../pages/Citizen/ReportIssue/reportIssue';
import MyReports from '../pages/Citizen/MyReports/myReports';
import MapView from '../pages/Citizen/MapView/mapView';
import CitizenHome from '../pages/Citizen/CitizenHome/citizenHome';

// Technician Pages
import AssignedIssues from '../pages/Technician/AssignedIssues/assignedIssues';
import TaskHistory from '../pages/Technician/TaskHistory/taskHistory';

// Admin Pages
import AdminDashboard from '../pages/Admin/AdminDashboard/adminDashboard';
import ManageIssues from '../pages/Admin/ManageIssues/manageIssues';
import AssignTask from '../pages/Admin/AssignTask/assignTask';
import Analytics from '../pages/Admin/Analytics/analytics';
import UserManagement from '../pages/Admin/UserManagement/userManagement';
import { NotFoundContainer } from './AppRoutesStyles';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes (or routes accessible to all roles) */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Citizen Routes */}
      <Route
        path="/citizen/home"
        element={<PrivateRoute allowedRoles={['citizen']}><CitizenHome /></PrivateRoute>}
      />
      <Route
        path="/report"
        element={<PrivateRoute allowedRoles={['citizen']}><ReportIssue /></PrivateRoute>}
      />
      <Route
        path="/myreports"
        element={<PrivateRoute allowedRoles={['citizen']}><MyReports /></PrivateRoute>}
      />
      <Route
        path="/map"
        element={<PrivateRoute allowedRoles={['citizen']}><MapView /></PrivateRoute>}
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

      {/* Common Routes */}
      <Route
        path="/settings"
        element={<PrivateRoute allowedRoles={['citizen', 'technician', 'admin']}><div style={{textAlign: 'center'}}>Settings</div></PrivateRoute>}
      />

      {/* Fallback for unknown routes */}
      <Route path="*" element={<NotFoundContainer>404 Not Found</NotFoundContainer>} />
    </Routes>
  );
};

export default AppRoutes;
