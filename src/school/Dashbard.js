import React from 'react';
import Header from '../bar/header';

function Dashbard() {
  let hideSideMenu = true;
  return (
    
    <>
    <Header hideSideMenu = {hideSideMenu}/>
    <div>Welcome to Dashbard</div>
    </>
  )
}

export default Dashbard