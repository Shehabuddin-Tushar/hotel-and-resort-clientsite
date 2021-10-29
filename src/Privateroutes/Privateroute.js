import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function Privateroute({ children, ...rest }) {
   let {user,isloading} = useAuth();
    if(isloading){
      console.log(user)
      return "...loading";
    }
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user. emailVerified ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default Privateroute;