import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import PrivateRoute from './PrivateRoute';



export const router = createBrowserRouter([
  { path: '/', element: <MainLayout />, children: [
      { index: true, element: <Home /> },
      { path: 'challenges', element: <Challenges /> },
      { path: 'challenges/:id', element: <ChallengeDetails /> },
      { path: 'challenges/add', element: <PrivateRoute><AddChallenge /></PrivateRoute> },
      { path: 'challenges/join/:id', element: <PrivateRoute><JoinChallenge /></PrivateRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: '*', element: <NotFound /> }
    ] },
  { path: '/my-activities', element: <PrivateRoute><DashboardLayout><MyActivities /></DashboardLayout></PrivateRoute> },
  { path: '/profile', element: <PrivateRoute><DashboardLayout><Profile /></DashboardLayout></PrivateRoute> }
]);

export default router;