import React from "react";
import {
    BrowserRouter as Router,

    Route,

    Redirect,
} from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
