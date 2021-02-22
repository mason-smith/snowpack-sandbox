import { lazy } from 'react';

// Local Dependencies
import { Route } from './types';

// Lazy Load Routes
const LoginPage = lazy(() => import('../features/Auth/Login'));
const RegisterPage = lazy(() => import('../features/Auth/Register'));
const DashboardPage = lazy(() => import('../features/Dashboard'));

export const routes: Route[] = [
  {
    // @ts-ignore
    component: <DashboardPage />,
    // icon: <DashboardOutlined />,
    path: '/dashboard',
    label: 'Dashboard',
    accessLevel: ['Employee'],
    private: true,
    navBar: true,
    title: 'Dashboard',
    tooltipTitle: 'Dashboard',
    ariaLabel: 'view my dashboard',
  },
  {
    component: <LoginPage />,
    path: '/login',
    label: 'Login',
    accessLevel: ['Employee'],
    private: false,
    navBar: false,
  },
  {
    component: <RegisterPage />,
    path: '/register',
    label: 'Register',
    accessLevel: ['Employee'],
    private: false,
    navBar: false,
  },
  {
    component: <LoginPage />,
    path: '/',
    label: 'Login',
    accessLevel: ['Employee'],
    private: false,
    navBar: false,
  },
];
