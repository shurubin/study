import React from 'react';

function FooterComponent(){
    return (
        <footer id="footer">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="foot-row1">
                            <a href="!#"><i className="fa fa-facebook"></i></a>
                            <a href="!#"><i className="fa fa-twitter"></i></a>
                            <a href="!#"><i className="fa fa-dribbble"></i></a>
                            <a href="!#"><i className="fa fa-youtube-play"></i></a>
                            <a href="!#"><i className="fa fa-linkedin"></i></a>
                        </div>

                        <div className="foot-row2">
                            <p>&copy; 2022 BRANDO IS PROUDLY POWERED BY THEMEZAA.</p>
                        </div>    
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;