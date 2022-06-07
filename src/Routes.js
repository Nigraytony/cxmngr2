import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';

// Main
import Dashboard from '@/pages/Dashboard/Dashboard';

// Ui
import NotificationsPage from '@/pages/Notifications/Notifications';

// App Functionality
import Assets from '@/pages/Assets/Assets';
import Events from '@/pages/Events/Events';
import Issues from '@/pages/Issues/Issues';
import Libraries from '@/pages/Libraries/Libraries';
import Oprs from '@/pages/Oprs/Oprs';
import Tasks from '@/pages/Tasks/Tasks';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: 'assets',
          name: 'Assets',
          component: Assets,
        },
        {
          path: 'events',
          name: 'Events',
          component: Events,
        },
        {
          path: 'issues',
          name: 'Issues',
          component: Issues,
        },
        {
          path: 'libraries',
          name: 'Libraries',
          component: Libraries,
        },
        {
          path: 'oprs',
          name: 'Oprs',
          component: Oprs,
        },
        {
          path: 'tasks',
          name: 'Tasks',
          component: Tasks,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
      ],
    },
  ],
});
