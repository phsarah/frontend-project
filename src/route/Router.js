import { BrowserRouter, Route, Switch } from "react-router-dom";


function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/* <HomePage/>*/}
                </Route>
                <Route exact path="/login">
                    {/* <LoginPage/>*/}
                </Route>
                <Route exact path="/signup">
                    {/* <SignupPage/>*/}
                </Route>
                <Route exact path="/profile">
                    {/* <ProfilePage/>*/}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
