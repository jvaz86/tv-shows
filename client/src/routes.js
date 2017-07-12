import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import DashboardPage from './containers/Dashboard.jsx';


const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        if (localStorage.getItem('userId')) {
          callback(null, DashboardPage);
        } else {
          callback(null, LoginPage);
        }
      }
    },
    {
      path: '/dashboard',
      component: DashboardPage
    }
  ]
};

export default routes;