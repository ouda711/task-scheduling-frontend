import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import Login from './components/users/Login';
import Register from './components/users/Register';
import ForgetPassword from './components/users/ForgetPassword';
import HomePage from './components/pages/HomePage';

const engine = new Styletron();
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme} children={null}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/forget-password"} component={ForgetPassword} />
            <Route exact path={"/home"} component={HomePage} />
          </Switch>
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
