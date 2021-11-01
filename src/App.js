import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Home from './Home/Home/Home';
import Camping from './Pages/Camping/Camping';
// import MyBookings from './Pages/Home/MyBookings/MyBookings';
// import Login from './Pages/Login/Login';
// import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
// import Bookings from './Pages/Bookings/Bookings';
import NotFound from './Shared/NotFound/NotFound';
// import Delete from './Pages/Delete/Delete';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <PrivateRoute path="/mybooking/:serviceId">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <Bookings></Bookings>
          </PrivateRoute>
          <PrivateRoute path="/delete">
            <Delete></Delete>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route> */}
          {/* <Route path="/camping">
            <Camping></Camping>
          </Route> */}
          <Route path="/camping">
            <Camping></Camping>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
