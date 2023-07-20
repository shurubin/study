import React from 'react';

function Section1Component(){
    return (
        <div id="section1">
            <div class="container">
                <div class="slide-container">
                    <div class="slide-view">
                        <ul class="slide-wrap">
                            <li class="slide slide4"></li>
                            <li class="slide slide1"></li>
                            <li class="slide slide2"></li>
                            <li class="slide slide3"></li>
                            <li class="slide slide4"></li>
                            <li class="slide slide1"></li>
                        </ul>


                    </div>

                </div>
                
                <div class="pagenation">
                    <span>
                        <a href="!#" class="page btn1">.</a>
                        <a href="!#" class="page btn2">.</a>
                        <a href="!#" class="page btn3">.</a>
                        <a href="!#" class="page btn4">.</a>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Section1Component;