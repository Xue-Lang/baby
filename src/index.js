import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Initial from './InitialPage/initial'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import HomePage from './HomePage/homePage';
import UserPage from './UserPage/userpage'
import privatePage from './Private/private';
import messagePage from './Message/message';
import friendPage from './Friend/friend';
import LoginPage from './LoginPage/loginPage';
import RetrievePage from './RetrievePage/retrievePage';
import RegisterPage from './RegisterPage/registerPage';
import Service from './Service/service';
import shopPage from './ShopPage/shopPage';
import Person from './Person/person';
import Shopping from './Shopping/shopping';
import BuyPage from './Shopping/Buy/buy';

var indexCss=require("./index.css");


class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Initial}></Route>
                            <Route path="/initial" component={Initial}></Route>
                            <Route path="/homePage" component={HomePage}></Route>
                            <Route path="/userpage" component={UserPage}></Route>
                            <Route path="/private" component={privatePage}></Route>
                            <Route path="/message" component={messagePage}></Route>
                            <Route path="/friend" component={friendPage}></Route>
                            <Route path="/loginPage" component={LoginPage}></Route>
                            <Route path="/retrievePage" component={RetrievePage}></Route>
                            <Route path="/registerPage" component={RegisterPage}></Route>
                            <Route path="/shopPage" component={shopPage}></Route>
                            <Route path="/service" component={Service}></Route>
                            <Route path="/person" component={Person}></Route>
                            <Route path="/shopping" component={Shopping}></Route>
                            <Route path="/buy" component={BuyPage}></Route>
                            <Redirect to="/homePage"></Redirect> 
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
