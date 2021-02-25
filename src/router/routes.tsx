import { lazy } from 'react';

// Local Dependencies
import { Route } from './types';

// Lazy Load Routes
const LoginPage = lazy(() => import('../features/Auth/Login'));
const RegisterPage = lazy(() => import('../features/Auth/Register'));
const DashboardPage = lazy(() => import('../features/Dashboard'));
const DnDReferencePage = lazy(() => import('../features/DnD'));
const WeatherPage = lazy(() => import('../features/Weather'));

export const routes: Route[] = [
  {
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
    component: <DnDReferencePage />,
    // icon: <DashboardOutlined />,
    path: '/dnd-ref',
    label: 'DnD Reference',
    accessLevel: ['Employee'],
    private: true,
    navBar: true,
    title: 'DnD Reference',
    tooltipTitle: 'DnD Reference',
    ariaLabel: 'view dnd reference resources',
  },
  {
    component: <WeatherPage />,
    // icon: <DashboardOutlined />,
    path: '/covid',
    label: 'Covid Data',
    accessLevel: ['Employee'],
    private: true,
    navBar: true,
    title: 'Covid Data',
    tooltipTitle: 'Covid Data',
    ariaLabel: 'view my covid data',
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
