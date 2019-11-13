import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route , NavLink, Switch, Redirect} from 'react-router-dom';

//Components
import Home from './Components/home';
import Post from './Components/posts';
import Profile from './Components/profile';
import PostItem from './Components/post_item';
import Life from './Components/lifecycle';
import User from './Components/user';

const App = () => {
    return (
        <BrowserRouter>
            <header>                
                <NavLink to='/' activeClassName="selected">Home</NavLink> 
                <br/>
                <NavLink to={{
                        pathname: '/profile',
                        hash: '#usman',
                        search: "?profile=true"
                    }}>Profile</NavLink> <br/>
                <NavLink to={{
                    pathname: '/posts'
                }}>Posts</NavLink> 
                <br/>
                <NavLink to='/lifecycle' activeClassName="selected">Life  Cycle</NavLink>
                <br/>
                <NavLink to='/user'>User</NavLink> 
            </header> <hr/>
            <div>
                <Switch>
                    <Redirect from="/posts" to="/"/>
                    <Route path='/posts/:id/:username' component={PostItem}/>
                    <Route path= '/profile' component= {Profile} />
                    <Route path='/user' component = {User}/>
                    <Route path= '/lifecycle' component= {Life} />
                    <Route path= '/posts' component= {Post} />
                    <Route path= '/' component= {Home} />
                </Switch>
            </div>
        </BrowserRouter>
        );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)