import React from 'react';
// import components
import Card from '../components/card';

// import images
import headShot from '../images/headshot.jpg';
import trioO from '../images/trio-o.jpg';
import pacmen from '../images/pacmen.jpg';

function Home() {
    return (
        <main className="content">
        <div className="centered">
             <h1>Gregory Josephs: Full Stack Developer In Training</h1>
             <div class="centered">
            <h1>About Me</h1>
          </div>
          <div class="full-width-text">

            <p>Driven by a passion for logic and process, I am a full-stack web developer in training, currently enrolled in the Professional Certificate in Coding course from MIT XPro.</p>

            <p>While I started writing HTML in the late 90s, my path to coding-as-a-career has been happily circuitous. While I am proud to have worked in the recreation department at MIT since 2005, I am also a published author of two novels, and have helped to feed my community as a weekly volunteer farm-hand since 2016.</p>
            
            <p>These diverse experiences outside the realm of coding have given me deep insight into the logic and processes that go into solving both tangible and intangible problems. They allow me a wealth of unique real-world perspective that I bring to each coding challenge I face.</p>
            
            <p>In coding, as in life, I believe there is always room for improvement. The first way of doing something is rarely the best way, and I’m constantly on the lookout for a better solution.</p>
            
            <p>I currently reside in Maynard, Massachusetts (just a stone’s throw from Boston) with my husband, two cats, and an Australian Cattle Dog.
            </p>

            <p>Take a look at all the projects in my portfolio by visiting the <a href="projects.html">projects page</a>, or take a look at the three most-recent below.</p>

            <p>Find me on <a href="https://github.com/gjosephs84" target="_blank">GitHub</a>, <a href="https://linkedin.com/in/gjosephs" target="_blank">LinkedIn</a>, <a href="https://twitter.com/gjosephs" target="_blank">Twitter</a>, or reach me via email at <a href="mailto:greg.josephs@gmail.com">greg.josephs@gmail.com</a></p>
          </div>
          <div className="centered">
            <img className="max100" src={headShot}/>
          </div>
          <div className="centered">
            <h1>Most Recent Projects</h1>
          </div>
        </div>
        <Card 
            width="18rem"
            image={trioO}
            title="Word Game"
            cardText="It's not Wordle, but ... It kind of is? Here is my for-educational-purposes-only clone of the popular word game that's taken the world by storm. This version was created by me from the ground up while learning React."
            dpLink="https://gjosephs84.github.io/trio-o"
            dpText="Play it Now!"
            ghLink="https://github.com/gjosephs84/trio-o"
            ghText="View the Repo!"
          
          />
        <Card 
            width="18rem"
            image={trioO}
            title="Trio-O"
            cardText="My take on a classic tic-tac-toe style board game, with a twist! Dom elements are draggable! Can you go three in a row?"
            dpLink="https://gjosephs84.github.io/trio-o"
            dpText="Play it Now!"
            ghLink="https://github.com/gjosephs84/trio-o"
            ghText="View the Repo!"
          
          />
          <Card 
            width="18rem"
            image={pacmen}
            title="PacMen Factory"
            cardText="An exercise to illustrate edge detection and dynamically adding elements to the DOM. Create some PacMen and watch them chomp and bounce!"
            dpLink="https://gjosephs84.github.io/pacmen_exercise"
            dpText="See it in Action!"
            ghLink="https://github.com/gjosephs84/pacmen_exercise"
            ghText="View the Repo!"
          
          />
        </main>
    )
}

export default Home;