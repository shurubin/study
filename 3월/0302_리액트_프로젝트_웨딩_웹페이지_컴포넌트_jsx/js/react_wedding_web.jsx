function WrapComponent(){
    return(
        <div id="wrap">
            <SkipComponent/>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <GotopComponent/>
        </div>
    )
}

    function SkipComponent(){
        return(
            <ul id="skip">
                <li><a href="#header">헤더바로가기</a></li>
                <li><a href="#main">메인바로가기</a></li>
                <li><a href="#footer">하단바로가기</a></li>
            </ul>
        )
    }

    function HeaderComponent(){
        return(
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
                        <a href="#wrap" title="HOME"></a>
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
        )

    }

    function MainComponent(){
        return(
            <main id="main">
                <Section1Component/>
                <Section2Component/>
                <Section3Component/>
                <Section4Component/>
                <Section5Component/>
                <Section6Component/>
                <Section7Component/>
                <Section8Component/>
                <Section9Component/>
                <Section10Component/>
                <Section11Component/>
            </main>
            
        )

    }
        function Section1Component(){
            return(
                <section id="section1">
                    <div className="container">
    
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1"></li>
                                    <li className="slide slide2"></li>
                                    <li className="slide slide3"></li>
                                </ul>
                            </div>
        
                        </div>
        
                        <div className="title">

                            <div>
                                <img src="./img/wedding-img4.png.webp" alt=""/>
                                <hr/>
                                <h2>WE ARE GETTING MARRIED</h2>                        
                                <h3>SEPTEMBER 20TH, 2015</h3>                            
                            </div>
                        </div>
        
        
                        {/* <!-- 좌우화살버튼 --> */}
                        <a href="!#" className="arrow-next-btn"><i></i></a>
                        <a href="!#" className="arrow-prev-btn"><i></i></a>
        
                        {/* <!-- 인디게이터 버튼 or 페이지네이션 버튼--> */}
                        <div className="page-btn-box">
                            <span><a href="!#" className="page-btn blind on">페이지1</a></span>
                            <span><a href="!#" className="page-btn blind">페이지2</a></span>
                            <span><a href="!#" className="page-btn blind">페이지3</a></span>
                        </div>  
    
    
    
                    </div>
                </section>
            )
        }
        function Section2Component(){
            return(
                <section id="section2">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h2>THE COUPLE</h2>
                            </div>
                            <div className="content">
                                <div className="left">
                                    <div className="content-box">
                                        <ul>
                                            <li className="left-image">
                                                <div className="gap">
                                                    <div className="img-box">
                                                        <figure>
                                                            <img src="./img/wedding-img5.jpg" alt=""/>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="left-text">
                                                <div className="gap">
                                                    <div className="text-box">
                                                        <ul>
                                                            <li><h2><i className="fa fa-quote-left"></i></h2></li>
                                                            <li><h3>WE ARE SHAPED AND FASHIONED BY WHAT WE LOVE.</h3></li>
                                                            <li><h4>I AM LAILA</h4></li>
                                                            <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text.</p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="icon-box">
                                        <div className="left">
                                            <a href="!#"><i className="fa fa-facebook-f"></i></a>
                                            <a href="!#"><i className="fa fa-twitter"></i></a>
                                            <a href="!#"><i className="fa fa-dribbble"></i></a>
                                            <a href="!#"><i className="fa fa-linkedin"></i></a>
                                        </div>
                                        <div className="right">
        
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="content-box">
                                        <ul>
                                            <li className="left-image">
                                                <div className="gap">
                                                    <div className="img-box">
                                                        <figure>
                                                            <img src="./img/wedding-img6.jpg" alt=""/>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="left-text">
                                                <div className="gap">
                                                    <div className="text-box">
                                                        <ul>
                                                            <li><h2><i className="fa fa-quote-left"></i></h2></li>
                                                            <li><h3>WE ARE SHAPED AND FASHIONED BY WHAT WE LOVE.</h3></li>
                                                            <li><h4>I AM LAILA</h4></li>
                                                            <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text.</p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="icon-box">
                                        <div className="left">
                                            <a href="!#"><i className="fa fa-facebook-f"></i></a>
                                            <a href="!#"><i className="fa fa-twitter"></i></a>
                                            <a href="!#"><i className="fa fa-dribbble"></i></a>
                                            <a href="!#"><i className="fa fa-linkedin"></i></a>
                                        </div>
                                        <div className="right">
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section3Component(){
            return(
                <section id="section3">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h2>EAGERLY WAITING FOR OUR WEDDING DATE</h2>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section4Component(){
            return(
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
            )
        }
        function Section5Component(){
            return(
                <section id="section5">
                    <div className="container">
                        <div className="gap">
                            <div className="title"><h2>PHOTO GALLERY</h2></div>
                            <div className="content">
                                <div className="gallery-box">
                                    <ul>
                                        <li>
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <figure>
                                                        <img src="./img/wedding-img8.jpg" alt=""/>
                                                    </figure>                                            
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <figure>
                                                        <img src="./img/wedding-img9.jpg" alt=""/>
                                                    </figure>                                            
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <figure>
                                                        <img src="./img/wedding-img10.jpg" alt=""/>
                                                    </figure>                                            
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <figure>
                                                        <img src="./img/wedding-img11.jpg" alt=""/>
                                                    </figure>                                            
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <figure>
                                                        <img src="./img/wedding-img12.jpg" alt=""/>
                                                    </figure>                                            
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <figure>
                                                        <img src="./img/wedding-img13.jpg" alt=""/>
                                                    </figure>                                            
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <figure>
                                                        <img src="./img/wedding-img14.jpg" alt=""/>
                                                    </figure>                                            
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <figure>
                                                        <img src="./img/wedding-img15.jpg" alt=""/>
                                                    </figure>                                            
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section6Component(){
            return(
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
            )
        }
        function Section7Component(){
            return(
                <section id="section7">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h2>GIFT REGISTRY</h2>
                            </div>
                            <div className="content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                                <span>
                                    <a href="!#"><img src="./img/wedding-img18.jpg" alt=""/></a>
                                    <a href="!#"><img src="./img/wedding-img19.jpg" alt=""/></a>
                                    <a href="!#"><img src="./img/wedding-img20.jpg" alt=""/></a>
                                    <a href="!#"><img src="./img/wedding-img21.jpg" alt=""/></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section8Component(){
            return(
                <section id="section8">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h2>OUR STORY</h2>
                            </div>
                            <div className="content">
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap">
                                            <li className="slide slide1">
                                                <div className="col-gap">
                                                    <div className="top-box">
                                                        <img src="./img/wedding-img8.jpg" alt=""/>
                                                        <span>
                                                            <em>30 March 2016</em>
                                                        </span>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <h3>01</h3>
                                                        <div>
                                                            <h4>Our First Dating</h4>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                            <i></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slide slide1">
                                                <div className="col-gap">
                                                    <div className="top-box">
                                                        <img src="./img/wedding-img9.jpg" alt=""/>
                                                        <span>
                                                            <em>30 March 2016</em>
                                                        </span>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <h3>02</h3>
                                                        <div>
                                                            <h4>Our First Dating</h4>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                            <i></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slide slide1">
                                                <div className="col-gap">
                                                    <div className="top-box">
                                                        <img src="./img/wedding-img10.jpg" alt=""/>
                                                        <span>
                                                            <em>30 March 2016</em>
                                                        </span>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <h3>03</h3>
                                                        <div>
                                                            <h4>Our First Dating</h4>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                            <i></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slide slide1">
                                                <div className="col-gap">
                                                    <div className="top-box">
                                                        <img src="./img/wedding-img11.jpg" alt=""/>
                                                        <span>
                                                            <em>30 March 2016</em>
                                                        </span>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <h3>04</h3>
                                                        <div>
                                                            <h4>Our First Dating</h4>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                            <i></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slide slide1">
                                                <div className="col-gap">
                                                    <div className="top-box">
                                                        <img src="./img/wedding-img12.jpg" alt=""/>
                                                        <span>
                                                            <em>30 March 2016</em>
                                                        </span>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <h3>05</h3>
                                                        <div>
                                                            <h4>Our First Dating</h4>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                            <i></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>                                    
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section9Component(){
            return(
                <section id="section9">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h2>RECENT BLOG</h2>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <div className="col-gap">
                                            <div className="img-box">
                                                <img src="./img/wedding-img22.jpg" alt=""/>
                                            </div>
                                            <div className="txt-box">
                                                <ul>
                                                    <li><a href="!#">WEDDING</a></li>
                                                    <li><h3><a href="!#">WEDDINGS ARE IMPORTANT BECAUSE THEY CELEBRATE LIFE AND POSSIBILITY.</a></h3></li>
                                                    <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is...</p></li>
                                                    <li><hr/></li>
                                                    <li><a href="!#">JUNE 30, 2016</a> / POSTED BY <a href="!#">HARESH</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-gap">
                                            <div className="img-box">
                                                <img src="./img/wedding-img23.jpg" alt=""/>
                                            </div>
                                            <div className="txt-box">
                                                <ul>
                                                    <li><a href="!#">WEDDING</a></li>
                                                    <li><h3><a href="!#">A WOMAN WITH A FINE PROSPECT OF HAPPINESS BEHIND HER.</a></h3></li>
                                                    <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is...</p></li>
                                                    <li><hr/></li>
                                                    <li><a href="!#">JUNE 30, 2016</a> / POSTED BY <a href="!#">HARESH</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-gap">
                                            <div className="img-box">
                                                <img src="./img/wedding-img24.jpg" alt=""/>
                                            </div>
                                            <div className="txt-box">
                                                <ul>
                                                    <li><a href="!#">WEDDING</a></li>
                                                    <li><h3><a href="!#">I WAS MARRIED BY A JUDGE. I SHOULD HAVE ASKED FOR A JURY.</a></h3></li>
                                                    <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is...</p></li>
                                                    <li><hr/></li>
                                                    <li><a href="!#">JUNE 30, 2016</a> / POSTED BY <a href="!#">HARESH</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                )
        }
        function Section10Component(){
            return(
                <section id="section10">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h2>LOCATION</h2>
                            </div>
                            <div className="content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section11Component(){
            return(
                <section id="section11">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.230064012958!2d126.75852181564994!3d37.667301526107906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c855df4876fe3%3A0xecb41ce28340f76!2z6rOg7JaR7IucIOyjvOyXvTHrj5kgMTQwOCDqsJXshKDrp4jsnYTrkZDsgrAxNOuLqOyngOyVhO2MjO2KuA!5e0!3m2!1sko!2skr!4v1675237256606!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
            )
        }


    function FooterComponent(){
        return(
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
        )

    }

    function GotopComponent(){
        return(
            <div className="gotop">
                <a href="#wrap"><i className="fa fa-angle-up"></i></a>
            </div>
        )

    }


ReactDOM.render(
    <WrapComponent/>,
    document.getElementById('root')
)