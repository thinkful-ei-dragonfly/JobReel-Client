import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'

export default function App() {
  return (
    <div className="App">
      <div className='App'>
        <main>
          <Switch>
            <Route
              exact path={'/'}
              component={RegistrationRoute}
            />
            {/* <PublicOnlyRoute
              path={'/login'}
              component={LoginRoute}
            /> */}
            <Route
              path={'/login'}
              component={LoginRoute}
            />
            {/* <Route
              component={NotFoundRoute}
            /> */}
          </Switch>
        </main>
      </div>
    </div>
  );
}