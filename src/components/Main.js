import React, { useEffect } from "react";
import edit from '../images/editButton.svg';
import plus from '../images/plus.svg';
import api from "../utils/Api";
import Card from "./Card";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ cards, setCards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike }) {
    
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {

    api.getAllCards()
        .then((data) => {
            setCards(data);
        })
        .catch((err) => {
            console.log('Ошибка:', err);
        });
    }, []);

    return(
        <main className="content">
            <section className="profile">
                <button id="profile-avatar" className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${currentUser ? currentUser.avatar : ''})`}} ></button>
                <div className="profile__info">
                  <h1 id="profile-name" className="profile__info-name">{currentUser ? currentUser.name : ''}</h1>
                  <p id="profile-description" className="profile__info-description">{currentUser ? currentUser.about : ''}</p>
                  <button type="button" className="profile__info-edit-button" onClick={onEditProfile}><img src={edit} className="profile__info-edit-button-image" alt="Редактирование кнопка" /></button>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}><img src={plus} alt="Добавление" className="profile__add-button-image" /></button>
              </section>
            <section className="elements">
            {cards.map((card, index) => {
                return (
                <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} />
                )
            })}
            </section>
        </main>
    )
}

export default Main;