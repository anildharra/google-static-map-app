import React from 'react';
//import HeaderContainer from '../containers/header_container';
import compassImg from '../assets/imgs/compass.png';
import HeaderNavigator from '../containers/header-navigator';

const Header = () => {
    return (
        <div style={{position:'relative', height: '140px', width: '100%', backgroundColor:'rgb(86, 241, 141)' }}>
             <div style={{position:'relative', height: '100px', width: '100px', float:'left' }}>
             <img src={compassImg}   width="100" height="100" alt='' />
             </div>
             
             <HeaderNavigator />
        </div>
    );
};

export default Header;