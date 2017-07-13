import React from 'react'
import {render} from 'react-dom'
import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router'
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
// render((
//     <Router history={hashHistory}>
//         <Route path="/" component={App}>
//             <IndexRoute component={Home} />
//             <Route path="register" component={Register} />
//             <Route path="login" component={Login} />
//         </Route>
//     </Router>
// ),document.getElementById('root'))
const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
        { path: 'register', component: Register },
        { path: 'login', component: Login },
    ]
}
render(<Router history={history} routes={routes} />, document.getElementById('root'))
