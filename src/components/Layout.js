import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '../components/Link';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';
import fonts from '../css/fonts.css';

const Layout = ({ children }) => {

  return (
    <>
      <NavBar />
      <div>
        <main>{children}</main>
      </div>
      <FooterBar />
    </>
  )
}


export default Layout
