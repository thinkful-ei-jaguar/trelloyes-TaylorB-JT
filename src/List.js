import React from 'react';
import Card from './Card.js';

function List (props) {
    console.log(props.header);
    console.log(props.cards);
    const cardComponents = props.cards.map((card, index) => {
        return <Card key={index} title={card.title} content={card.content}></Card>;
    });
    return (
        <>
        <section className="List">
        <header className="List-header">
            <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
            {cardComponents}
        </div>
        </section>
        
        </>
    );
    
};

export default List;