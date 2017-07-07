'use strict' //This is for use new ECMAScript 6 variables type

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render(
	(
	  	<MuiThemeProvider muiTheme={getMuiTheme()}>
	    	// <Router history={createBrowserHistory()} routes={routes} />
	    	<Route path="/" component={routes.HomePage}/>
	  	</MuiThemeProvider>
	), 
	document.getElementById('react-app')
);



//ReactDom.render(<h1>Hello from React</h1>, document.getElementById('react-app'));