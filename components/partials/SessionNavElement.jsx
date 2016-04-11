"use strict";

import React from 'react'
import {Link} from 'react-router'
import {RaisedButton} from 'material-ui';
import SessionActionCreator from '../actions/SessionActionCreator'

export default class SessionNavElement extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  logout(){
    SessionActionCreator.destroySession();
  }

  render() {

  	const session = this.props.session
    
    if (!session) {
    	return (
    		<RaisedButton className="navButton" label="Iniciar sesión" primary={true} zDepth={0} onTouchTap={this.props.handleToggle}/>
    	)
    }else{
	    return (
	      <div>
	      	{session.name}
          <RaisedButton className="navButton" label="logout" secondary={false} zDepth={0} onTouchTap={this.logout}/>
	      </div>
	    )
	  }
  }
}

