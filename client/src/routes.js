import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import Dashboard from './components/Dashboard.jsx';


const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/dashboard',
      component: Dashboard
    }
  ]
};

export default routes;