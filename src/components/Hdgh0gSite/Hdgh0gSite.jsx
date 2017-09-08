import React, {Component} from 'react';
import Header from '../Header/Header.jsx'
import MainPage from '../MainPage/MainPage.jsx'
import './Hdgh0gSite.css'
import NavBar from "../Navbar/NavBar.jsx";
import {StickyContainer, Sticky} from 'react-sticky';

class Hdgh0gSite extends Component {

  render() {
    let children = this.props.children || <MainPage/>;
    return (
      <div className="hdgh0g-site">
        <Header/>
        <StickyContainer>
          <div>
            <Sticky>
              {
                (props) => <NavBar
                  isSticky={props.isSticky}
                />
              }
            </Sticky>
            <div className="hdgh0g-site-content-wrap">
              <div className='hdgh0g-site-content'>
                {children}
              </div>
            </div>
          </div>
        </StickyContainer>
      </div>
    );
  }
}

export default Hdgh0gSite;
