import React from 'react';

function CardButton({initialText, visitedText, link}) {
    const [text, setText] = React.useState(initialText);
    const handleClick = ()=> setText(visitedText);
    return (
        <a href={link} target="_blank" style={{textDecoration: 'none'}}>
        <div className="card-button" onClick={handleClick}>
            {text}
        </div>
        </a>
    );
};

export default CardButton;