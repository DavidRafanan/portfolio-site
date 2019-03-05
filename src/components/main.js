import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage.js';
import Contact from './contact.js';
import Resume from './resume.js'

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route path="/about" component={Contact} />
		<Route path="/resume" component={Resume} />
	</Switch>
)

export default Main;