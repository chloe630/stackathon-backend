import React from 'react';

const Home = function(props) {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    return (
    <div className="container">
        <h1 className = "homePageTitle">Hellooo</h1>
        <h1>Welcome to Drinker's Heaven!</h1>
        <div className="carousel carousel-slider">
        <a className="carousel-item" href="#one!"><img src="http://placehold.it/350x150" /></a>
        <a className="carousel-item" href="#two!"><img src="http://placehold.it/350x150" /></a>
        <a className="carousel-item" href="#three!"><img src="http://placehold.it/350x150" /></a>
        <a className="carousel-item" href="#four!"><img src="http://placehold.it/350x150" /></a>
        </div>
    </div>
    );

};

export default Home;