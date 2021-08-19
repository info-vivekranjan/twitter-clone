import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Register } from './Register';
import { WelcomePage } from './WelcomePage';
import { Login } from './Login'
function Routes() {

    return (
        <>
            <Switch>

                <Route path="/" exact>
                    <WelcomePage />
                </Route>

                <Route path="/signup" exact>

                    <Register />

                </Route>

                <Route path="/login" exact>

                    <Login />

                </Route>

                <Route>
                    <div style={{ paddingTop: "40vh", textAlign: "center" }}>
                        <h1 style={{ fontSize: "4vw" }}>This account doesn’t exist</h1>
                        <p>Try searching for another.</p>
                    </div>
                </Route>

            </Switch>
        </>
    )

}

export { Routes }