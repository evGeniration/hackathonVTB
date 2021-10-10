import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import {useSelector} from "react-redux";
import {useIsAuth} from "../context/AuthContextProvider";
export const AppRouter = () => {

    const {isAuth}=useIsAuth()
    return (
        Object.keys(isAuth).length ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}
                    />
                )}
                <Redirect to={"/datasets"}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}
                    />
                )}
                <Redirect to={"/"}/>
            </Switch>
    );
};
