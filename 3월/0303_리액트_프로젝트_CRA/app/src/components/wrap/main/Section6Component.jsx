import React from 'react';

function Section6Component(){
    return (
        <section id="section6">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <ul>
                            <li>
                                <div className="col-gap">
                                    <div className="content-box left">
                                        <h2>
                                            BE PRESENT AT THE WEDDING TO GIVE YOUR BLESSINGS & LOVE.
                                        </h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="col-gap">
                                    <div className="content-box right">
                                        <div className="content-wrap">
                                            <h2 className="content-head">ARE YOU ATTENDING?</h2>
                                            <form name="message_form" id="messageForm" method="post" action="./message.php">
                                                <ul>
                                                    <li><input type="text" name="irum" id="irum" placeholder="YURE NAME"/></li>
                                                    <li><input type="email" name="email" id="email" placeholder="YURE EMAIL"/></li>
                                                    <li>
                                                        <div>
                                                            <select name="select1" id="select1">
                                                                <option value="" selected>NUMBER OF GUESTS</option>
                                                                <option value="01">01</option>
                                                                <option value="02">02</option>
                                                                <option value="03">03</option>
                                                                <option value="04">04</option>
                                                                <option value="05">05</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <select name="select2" id="select2">
                                                                <option value="ALL EVENTS" selected>ALL EVENTS</option>
                                                                <option value="Cocktail Party">Cocktail Party</option>
                                                                <option value="Wedding Ceremony">Wedding Ceremony</option>
                                                                <option value="Wedding Party">Wedding Party</option>
                                                            </select>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <textarea name="message" id="message" placeholder="YURE MESSAGE"></textarea>
                                                    </li>
                                                    <li>
                                                        <button type="submit" className="submit-btn">Send Message</button>   
                                                    </li>
                                                </ul>
                                            </form>
                                            <div className="content-foot foot1">Your message was sent successfully. Thanks.</div>
                                            <div className="content-foot foot2">Validation errors occurred. Please confirm the fields and submit it again.</div>
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

export default Section6Component;