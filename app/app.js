import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom'
import routes from './routes/'
import Home from './views/Home'
import Login from './views/Account/Login'
import Register from './views/Account/Register'
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
render(routes ,document.getElementById('root'))
