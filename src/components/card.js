import React from 'react';
import CardButton from './cardButton';
function Card ({width, image, title, cardText, link, textInitial, textVisited}) {
    let cardWidth
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
                {link.map((link, index) => {
                    return (
                    <CardButton
                        key={index}
                        initialText={textInitial[index]}
                        visitedText={textVisited[index]}
                        link={link}
                    />)
                })}
               
            </div>
        </div>
    );
};

export default Card;