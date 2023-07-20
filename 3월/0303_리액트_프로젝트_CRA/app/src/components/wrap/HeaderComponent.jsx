import React from 'react';

function HeaderComponent(){
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="left">
                        <ul>
                            <li><a href="#section2" className="main-btn" title="THE COUPLE">THE COUPLE</a></li>
                            <li><a href="#section4" className="main-btn" title="EVENT & PARTIES">EVENT & PARTIES</a></li>
                            <li><a href="#section5" className="main-btn" title="GALLERY">GALLERY</a></li>
                        </ul>
                    </div>
                    <div className="center">
                        <a href="#wrap" title="HOME" className='hide'>HOME</a>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="#section6"  className="main-btn" title="ATTENDING">ATTENDING</a></li>
                            <li><a href="#section9"  className="main-btn" title="OUR BLOG">OUR BLOG</a></li>
                            <li><a href="#section10" className="main-btn" title="LOCATION">LOCATION</a></li>
                        </ul>
                    </div>
                    <div id="mobileNav">
                        <a href="!#" className="mobile-btn">
                            <i className="line line1"></i>
                            <i className="line line2"></i>
                            <i className="line line3"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;