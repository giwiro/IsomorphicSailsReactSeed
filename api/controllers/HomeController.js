/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//import routes from '../../components/routes.jsx';
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'


module.exports = {
	'index' : function (req, res) {

		let state = {
			session: {
				name: 'Gi Wah'
			}
		};

		renderTo(res, '/', state);
		
	},

	/*'home' : function (req, res) {

		let state = {
			session: {
				name: 'Gi Wah'
			}
		};

		renderTo(res, '/home', state);
	}*/

};

