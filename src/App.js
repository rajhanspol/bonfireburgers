import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './index.css';
import CheckOutPage from './Pages/CheckOutPage';
import FrontPage from './Pages/FrontPage';
import LogInPage from './Pages/LogInPage';
import OrderPage from './Pages/OrderPage';
import SignInPage from './Pages/SignInPage';
import ViewOrderPage from './Pages/ViewOrderPage';
import AdminPage from './Pages/AdminPage'

function App() {
  return (
    <React.Fragment>

      <Switch>
        <Route exact path='/'>
          <FrontPage />
        </Route>
      </Switch>

      <Switch>
        <Route path='/orderonline'>
          <OrderPage />
        </Route>
      </Switch>

      <Switch>
        <Route path='/signin'>
          <SignInPage />
        </Route>
      </Switch>

      <Switch>
        <Route path='/login'>
          <LogInPage />
        </Route>
      </Switch>

      <Switch>
        <Route path="/checkoutpage">
          <CheckOutPage />
        </Route>
      </Switch>

      <Switch>
        <Route path="/vieworders">
          <ViewOrderPage/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/adminpage">
          <AdminPage />
        </Route>
      </Switch>

    </React.Fragment>
    
  );
}

export default App;
