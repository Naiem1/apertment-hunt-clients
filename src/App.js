import './App.scss';
import HomeDetails from './components/HomeDetails/HomeDetails';
import Login from './components/Login/Login';
import AddHouseRent from './components/Dashboard/AddHouseRent/AddHouseRent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyRent from './components/Dashboard/MyRent/MyRent';
import BookingList from './components/Dashboard/BookingList/BookingList';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      
      <div className="App">
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/homedetails">
            <HomeDetails></HomeDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard/bookinglist">
            <BookingList></BookingList>
          </Route>
          <Route path="/dashboard/myrent">
            <MyRent></MyRent>
          </Route>
          <Route path="/dashboard/addhouserent">
            <AddHouseRent></AddHouseRent>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
