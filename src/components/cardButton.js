import React from 'react';

function CardButton({initialText, visitedText, link}) {
    const [text, setText] = React.useState(initialText);
    const [classes, setClasses] = React.useState("card-button");
    const handleClick = ()=> {
        setText(visitedText);
        setClasses("card-button visited");
    };
    return (
        <a href={link} target="_blank" style={{textDecoration: 'none'}}>
        <div className={classes} onClick={handleClick}>
            {text}
        </div>
        </a>
    );
};

export default CardButton;