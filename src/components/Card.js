import React from "react";
import trash from '../images/Trash.svg';
import like from '../images/favorite.svg';

function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }
    return(
        <article className="element">
            <button type="button" className="element__delete-button"><img className="element__image-delete" src={trash} alt="Кнопка удаления" /></button>
            <img className="element__image" style={{ backgroundImage: `url(${card.link})` }} src={card.link} alt={card.name} onClick={handleClick} />
            <div className="element__group">
                <h2 className="element__group-title">{card.name}</h2>
                <button type="button" className="element__group-button"><img className="element__group-favorite" alt="Избранное" src={like} /></button>
            </div>
            <span id="element__likes" className="element__likes">{card.likes.length}</span>
        </article>)
}

export default Card;