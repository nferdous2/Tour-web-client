import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Home from './Home/Home/Home';
import Login from './Home/Login/Login';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';
import Add from './Home/Add/Add';
import PrivateRoute from './Home/PrivateRoute/PrivateRoute';
import Booking from './Home/Booking/Booking';
import MyBooking from './Home/MyBooking/MyBooking';
import Register from './Home/Register/Register'
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
          <PrivateRoute path="/booking/:id">
            <Booking />
          </PrivateRoute>
          <PrivateRoute path="/myBooking">
            <MyBooking />
          </PrivateRoute>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
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
