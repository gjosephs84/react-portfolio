import React from 'react';

function Card ({width, image, title, cardText, dpLink, dpText, ghLink, ghText}) {
    let cardWidth
    console.log(width);
    console.log(image);
    console.log(title);
    console.log(cardText);
    console.log(dpLink);
    console.log(dpText);
    console.log(ghLink);
    console.log(ghText);
    if (!width) {
        cardWidth = "18rem;"
    } else {
        cardWidth = width;
    }
    const styles = `max-width: ${cardWidth}`;
    return (
        <div className="card" style={{minWidth: cardWidth, maxWidth: cardWidth}}>
            <img src={image} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{cardText}</p>
                <br/>
                <a href={dpLink} className="btn btn-primary">{dpText}</a>
                <br/>
                <a href={ghLink} className="btn btn-primary" target="_blank">{ghText}</a>
            </div>
        </div>
    );
};

export default Card;