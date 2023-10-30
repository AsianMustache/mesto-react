import React from "react";
import trash from '../images/Trash.svg';
import like from '../images/favorite.svg';
import { useContext } from "react";

function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `element__group-button ${isLiked ? 'element__group-button_active' : ''}`
    );; 

    return(
        <article className="element">
             {isOwn && <button type="button" className="element__delete-button"><img className="element__image-delete" src={trash} alt="Кнопка удаления" /></button>}
            {/* <button type="button" className="element__delete-button"><img className="element__image-delete" src={trash} alt="Кнопка удаления" /></button> */}
            <img className="element__image" style={{ backgroundImage: `url(${card.link})` }} src={card.link} alt={card.name} onClick={handleClick} />
            <div className="element__group">
                <h2 className="element__group-title">{card.name}</h2>
                {/* <button type="button" className="element__group-button"><img className="element__group-favorite" alt="Избранное" src={like} /></button> */}
                <button type="button" className={cardLikeButtonClassName}><img className="element__group-favorite" alt="Избранное" src={like} /></button>
            </div>
            <span id="element__likes" className="element__likes">{card.likes.length}</span>
        </article>)
}

export default Card;