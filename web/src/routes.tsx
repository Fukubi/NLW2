import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterComplete from './pages/RegisterComplete';
import PasswordRecuperation from './pages/PasswordRecuperation';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/registercomplete" component={RegisterComplete} />
            <Route path="/password-recuperation" component={PasswordRecuperation} />
        </BrowserRouter>
    );
}

export default Routes;