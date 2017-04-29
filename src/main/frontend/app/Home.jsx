import React from 'react';

const Home = function(props) {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    return (
    <div className="container">
        <h1>Hellooo</h1>
        <h1>welcome to drinker's heaven!</h1>
        <div className="carousel carousel-slider">
        <a className="carousel-item" href="#one!"><img src="http://placegoat.com/200/300" /></a>
        <a className="carousel-item" href="#two!"><img src="http://placegoat.com/200/300" /></a>
        <a className="carousel-item" href="#three!"><img src="http://placegoat.com/200/300" /></a>
        <a className="carousel-item" href="#four!"><img src="http://placegoat.com/200/300" /></a>
        </div>
    </div>
    );

};

export default Home;