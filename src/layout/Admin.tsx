import { useMemo, useState } from 'react';
import { Login } from 'pages/Login';
import Sidebar from 'components/Sidebar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Dashboard } from 'pages/Dashboard';
import { FloorUsage } from 'pages/FloorUsage';
import { Overview } from 'pages/Overview';
import { Report } from 'pages/Report';

const Admin = () => {
  const [isLogin, setIsLogin] = useState(false);

  useMemo(() => {
    let status = localStorage.getItem('token');
    if (status) {
      setIsLogin(true);
    }
    return () => { };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isLogin && <Login setIsLogin={setIsLogin} />}
      {isLogin && (
        <Router>
          <div style={{ height: '100%' }}>
            <Sidebar />
            <Switch>

              <Route path="/dashboard" component={Dashboard} exact></Route>
              <Route path="/floor-usage" component={FloorUsage} exact></Route>
              <Route path="/overview" component={Overview} exact></Route>
              <Route path="/report" component={Report} exact></Route>
              <Redirect to="/dashboard" />
            </Switch>
          </div>


        </Router>
      )}
    </>
  );
};

export { Admin };
