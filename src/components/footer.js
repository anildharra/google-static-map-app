import React from 'react';
 
const Footer = (props) => {
    let copyRight = new Date().toLocaleDateString();

    return (
        <div style={{position:'fixed', textAlign:'center', bottom:'0px', width:'100%', height:'25px', backgroundColor:'rgb(86, 241, 141)'}}>
             <div>Copyright {copyRight}</div>
        </div>
    );
};

export default Footer;