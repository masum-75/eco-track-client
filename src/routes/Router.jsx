import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import PrivateRoute from './PrivateRoute';
import Challenges from '../pages/Challenges';
import ChallengeDetails from '../pages/ChallengeDetails';
import AddChallenge from '../pages/AddChallenge';
import JoinChallenges from '../pages/JoinChallenge';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import NotFound from '../pages/NotFound';
import DashboardLayout from '../layout/DashboardLayout';
import MyActivities from '../pages/MyActivities';
import Profile from '../pages/Profile';
import Home from '../pages/Home';



export const router = createBrowserRouter([
  { path: '/', element: <MainLayout />, children: [
      { index: true, element: <Home /> },
      { path: 'challenges', element: <Challenges></Challenges> },
      { path: 'challenges/:id', element: <ChallengeDetails /> },
      { path: 'challenges/add', element: <PrivateRoute><AddChallenge /></PrivateRoute> },
{ path: 'challenges/join', element: <PrivateRoute><JoinChallenges /></PrivateRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: '*', element: <NotFound /> }
    ] },
  { path: '/my-activities', element: <PrivateRoute><DashboardLayout><MyActivities /></DashboardLayout></PrivateRoute> },
  { path: '/profile', element: <PrivateRoute><DashboardLayout><Profile /></DashboardLayout></PrivateRoute> }
]);

export default router;