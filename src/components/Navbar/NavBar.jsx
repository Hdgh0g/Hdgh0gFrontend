import React, {Component} from 'react';
import {Link} from 'react-router';
import './NavBar.css'
import items from './items.json'

class NavBar extends Component {
  static defaultProps = {
    items,
    isSticky: false,
  };

  render() {
    let navBarItems = this.props.items.map(item => (
      <Link className="nav-bar-item"
            key={item.caption}
            to={item.link}
      >
        <div className="nav-bar-item-link">{item.caption}</div>
      </Link>
    ));

    if (this.props.isSticky) {
      let firstItem = items[0];
      navBarItems[0] = (
        <Link className="nav-bar-item"
              to={firstItem.link}
              key={firstItem.caption}
        >
          <div className="nav-bar-logo-combo">
            <img alt="logo" src='/img/logo.jpg'
                 className="nav-bar-logo"/>
            <div className="nav-bar-item-link">{firstItem.caption}</div>
          </div>
        </Link>
      )
    }

    return (
      <div className={this.props.isSticky ? "nav-bar-sticky" : "nav-bar"}> {navBarItems} </div>
    );
  }
}

export default NavBar;
