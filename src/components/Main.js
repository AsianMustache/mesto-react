import React, { useEffect, useState } from "react";
import edit from '../images/editButton.svg';
import plus from '../images/plus.svg';
import trash from '../images/Trash.svg';
import like from '../images/favorite.svg';
import api from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getApiUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log('Ошибка:', err);
            });

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
                <button id="profile-avatar" className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})`}} ></button>
                <div className="profile__info">
                  <h1 id="profile-name" className="profile__info-name">{userName}</h1>
                  <p id="profile-description" className="profile__info-description">{userDescription}</p>
                  <button type="button" className="profile__info-edit-button" onClick={onEditProfile}><img src={edit} className="profile__info-edit-button-image" alt="Редактирование кнопка" /></button>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}><img src={plus} alt="Добавление" className="profile__add-button-image" /></button>
              </section>
            <section className="elements">
            {cards.map((card, index) => {
                return(
                <article className="element" key={index}>
                    <button type="button" className="element__delete-button"><img className="element__image-delete" src={trash} alt="Кнопка удаления" /></button>
                    <img className="element__image" style={{ backgroundImage: `url(${card.link})` }} alt={card.name}/>
                    <div className="element__group">
                        <h2 className="element__group-title">{card.name}</h2>
                        <button type="button" className="element__group-button"><img className="element__group-favorite" alt="Избранное" src={like} /></button>
                    </div>
                    <span id="element__likes" className="element__likes">{card.likes.length}</span>
                </article>)
            })}
            </section>
        </main>
    )
}

export default Main;