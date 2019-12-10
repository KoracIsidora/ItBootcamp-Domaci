import React from 'react';
import PastLList from '../components/past-l-list';
import UpcomigLList from '../components/upcoming-l-list';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

const Content = (props) => {

    return (
        <>
            <Router>
                <ul>
                    <li><Link to={'/'}>Past launches</Link></li>
                    <li><Link to={'/future'}>Upcoming launches</Link></li>
                </ul>
                <Switch>
                    <Route exact path ='/' component={PastLList}></Route>

                    <Route exact path='/future' component={UpcomigLList}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default Content;