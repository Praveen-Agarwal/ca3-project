import React from "react";
import './index.css'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function Navbar(props) {
  const name = props.name || '';
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{name || ''}</Popover.Header>
      <Popover.Body>
        <strong >{props.email}</strong>
        <button className="SignOutbtn" onClick={props.signout}>Sign Out</button>
      </Popover.Body>
    </Popover>
  );


  return (
    <>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="\">
            {props.appName}
          </a>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="success">{name[0] || ''}</Button>
          </OverlayTrigger>
        </div>
      </nav>
    </>
  );
}
