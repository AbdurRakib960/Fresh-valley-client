import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


const PrivateRoute = ({comp: Component,
    ...rest}) => {
    const {currentUser} = useAuth();
    return (
        <Route
        {...rest}
        render={props =>
          !currentUser ? (
            <Redirect to="/login" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
};

export default PrivateRoute;