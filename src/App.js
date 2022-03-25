import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import Login from './components/users/Login';
import Register from './components/users/Register';
import ForgetPassword from './components/users/ForgetPassword';
import HomePage from './components/pages/HomePage';
import TaskSinglePage from './components/pages/TaskSinglePage';
import Notification from './components/partials/Notification';
import PrivateRoute from './services/guard/PrivateRoute';


const engine = new Styletron();
function App() {

  return (
    <>
      <Notification />
      <BrowserRouter forceRefresh={true}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme} children={null}>
            <Switch>
              <Redirect exact from='/' to='/tasks' />
              <Route exact path={"/login"} component={Login} />
              <Route exact path={"/register"} component={Register} />
              <Route exact path={"/forget-password"} component={ForgetPassword} />
              <PrivateRoute exact path={"/tasks"} component={HomePage} />
              <PrivateRoute exact path={"/task/:id"} component={TaskSinglePage} />
            </Switch>
          </BaseProvider>
        </StyletronProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
