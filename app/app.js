import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom'
import Home from './Home'
import Login from './account/Login'
import Register from './account/Register'
import '../style/normalize.scss'

class App extends React.Component{
    constructor(...args){
        super(...args)
    }
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
),document.getElementById('root'))