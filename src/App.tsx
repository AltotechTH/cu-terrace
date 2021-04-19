import { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Configurations,
  History,
  Order,
  Overview,
  // Revenue, Users
} from './pages/Overview';
import { FloorUsage } from 'pages/FloorUsage';

const App: FC = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/dashboard" component={Overview} exact></Route>
        {/* <Route path="/floor-usage" component={Users} exact></Route>
        <Route path="/overview/revenue" component={Revenue} exact></Route> */}
        <Route path="/floor-usage" component={FloorUsage} exact></Route>
        <Route path="/report" component={History} exact></Route>
        <Route path="/bill" component={Configurations} exact></Route>
      </Switch>
    </Router>
  );
};

export default App;
