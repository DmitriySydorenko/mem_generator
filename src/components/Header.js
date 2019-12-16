import React from 'react';


class Header extends React.Component {
render(){
    return (
    <header className="header_section">
    <div className="header_container">
        <img src="/images/Trollface.png" className="header_img" />
        <h1 className="header_title">React Meme Generator app </h1>
    </div>
    </header>
    )
}    
}

export default Header