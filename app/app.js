import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom'
import routes from './routes/'
import reducer from './reducers/reducers'
import Home from './views/Home'
import Login from './views/Account/Login'
import Register from './views/Account/Register'
import '../style/normalize.scss'

const store = createStore(reducer)
// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render(<Provider store={store}>
            {routes}
        </Provider>,document.getElementById('root'))
