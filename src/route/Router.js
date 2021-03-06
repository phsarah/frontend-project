import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupPage from '../pages/signupPage/SignupPage';
import LoginPage from '../pages/loginPage/LoginPage'
import HomePage from '../pages/homePage/HomePage'
import ProfilePage from '../pages/profilePage/ProfilePage'

function Router(){
    return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/signup">
                    <SignupPage/>
                </Route>
                
            </Switch>
            </BrowserRouter>
    )
}

export default Router;