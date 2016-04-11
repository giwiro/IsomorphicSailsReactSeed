"use strict";

import React from 'react'
import {Link} from 'react-router'
import SessionNavElement from './SessionNavElement.jsx'
import {AppBar, FlatButton, LeftNav} from 'material-ui';

export default class Nav extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    //console.log('handleToggle', this.handleToggle);
    const session = this.props.session
    
    return (
      <div>
        {/*<AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<RaisedButton className="navButton" label="Iniciar sesión" primary={true} zDepth={0} onTouchTap={this.handleToggle}/>} 
          zDepth={0}/>*/}
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<SessionNavElement session={session} handleToggle={this.handleToggle}/>} 
          zDepth={0}/>
        <LeftNav 
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
          hola
        </LeftNav>
      </div>
    )
  }
}

