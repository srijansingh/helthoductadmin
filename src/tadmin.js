import React, { Component } from 'react'
import 'react-activity/dist/react-activity.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Login from "./Admin/auth/login";
import { AuthProvider } from "./Admin/auth/Auth";
import PrivateRoute from "./Admin/auth/PrivateRoutes";
import Editor from './Admin/dashboard/container/editor/editor';
import Landing from './Admin/dashboard/container/landing/landing';
import Blogging from './Admin/dashboard/container/blogging/blogging';

export default class Tadmin extends Component {
    render() {
        return (
            <AuthProvider> 
                <Router >
                    <div>
                        <PrivateRoute exact path="/" component={Landing} />
                        <PrivateRoute exact path="/create" component={Editor} />
                        <PrivateRoute exact path="/blog/:postid" component={Blogging} />
                        <Route exact path="/login" component={Login} />
                    </div>
                </Router>
            </AuthProvider>
        )
    }
}
