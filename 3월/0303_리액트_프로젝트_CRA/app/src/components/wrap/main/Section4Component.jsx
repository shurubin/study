import React from 'react';

function Section4Component(){
    return (
        <section id="section4">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>EVENT & PARTIES</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="col-gap">
                                    <div className="box">
                                        <div className="gap">
                                            {/* <!-- <h2><i className="fa fa-ambulance"></i></h2> --> */}
                                            {/* <!-- <h2><i className="material-icons">access_alarm</i></h2> --> */}
                                            <h2><i className="icon-wine"></i></h2>
                                            <h3>COCKTAIL PARTY</h3>
                                            <hr/>
                                            <p>SEPTEMBER 19TH, 2015</p>
                                            <h4>12:00 PM – 16:00 PM</h4>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="col-gap">
                                    <div className="box">
                                        <div className="gap">
                                            {/* <!-- <h2><i className="fa fa-apple"></i></h2> --> */}
                                            {/* <!-- <h2><i className="fas fa-air-freshener"></i></h2> --> */}
                                            <h2><i className="icon-heart"></i></h2>
                                            <h3>WEDDING CEREMONY</h3>
                                            <hr/>
                                            <p>SEPTEMBER 19TH, 2015</p>
                                            <h4>12:00 PM – 16:00 PM</h4>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="col-gap">
                                    <div className="box">
                                        <div className="gap">
                                            {/* <!-- <h2><i className="glyphicon glyphicon-apple"></i></h2> --> */}
                                            <h2><i className="icon-gift"></i></h2>
                                            <h3>WEDDING PARTY</h3>
                                            <hr/>
                                            <p>SEPTEMBER 19TH, 2015</p>
                                            <h4>18:00 PM – 07:00 AM</h4>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4Component;