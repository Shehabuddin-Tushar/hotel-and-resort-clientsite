import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './shared/Navbar';
import Home from './Pages/Home/Home';
import Privateroute from './Privateroutes/Privateroute';
import Bookingdetails from './Pages/Bookingdetails/Bookingdetails';
import Login from './Pages/Login/Login';
import Authprovider from './hooks/Context';
import useFirebase from './hooks/Firebasehook';
import {Redirect} from 'react-router-dom'
import Footer from './shared/Footer/Footer';
import Myorders from './Pages/Myorders/Myorders';
function App() {
  const {user}=useFirebase();
  return (
    <div className="App">
      <Authprovider>

      
       <BrowserRouter>
         <Navbar/>
         <Switch>
            <Route exact path="/">
               <Home/>
            </Route>

            <Route path="/home">
               <Home/>
            </Route>

            <Privateroute path="/bookingdetails/:id">
                 <Bookingdetails/>
            </Privateroute>

            <Privateroute path="/myorders">
                 <Myorders/>
            </Privateroute>

            <Route path="/login">
               {user.emailVerified ? <Redirect to="/home" /> : <Login/>}
            </Route>
         </Switch>
         <Footer/>
       </BrowserRouter>

       </Authprovider>
    </div>
  );
}

export default App;
