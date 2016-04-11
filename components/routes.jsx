import React from 'react'
import {RouteHandler, Route, IndexRoute} from 'react-router'
import MainPage from './pages/MainPage.jsx'
import App from './App.jsx'
import {merge} from 'lodash'

/*module.exports = (
  <Route path="/" component={App}>
  	<IndexRoute component={MainPage} />
  </Route>
);*/

module.exports = (params) => {

	const session = params.session

	return (
		<Route path="/" component={App} session={session}>
	  	<IndexRoute component={MainPage}/>
	  </Route>
	)
}