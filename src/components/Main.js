import React from "react";
import edit from '../images/editButton.svg';
import plus from '../images/plus.svg';
import trash from '../images/Trash.svg';
import like from '../images/favorite.svg';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

    return(
        <main className="content">
            <section className="profile">
                <button id="profile-avatar" className="profile__avatar" onClick={onEditAvatar} ></button>
                <div className="profile__info">
                  <h1 id="profile-name" className="profile__info-name"></h1>
                  <p id="profile-description" className="profile__info-description"></p>
                  <button type="button" className="profile__info-edit-button" onClick={onEditProfile}><img src={edit} className="profile__info-edit-button-image" alt="Редактирование кнопка" /></button>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}><img src={plus} alt="Добавление" className="profile__add-button-image" /></button>
              </section>
            <section className="elements">
            <template id="template-elements">
                <article className="element">
                    <button type="button" className="element__delete-button"><img className="element__image-delete" src={trash} alt="Кнопка удаления" /></button>
                    <img className="element__image" />
                    <div className="element__group">
                        <h2 className="element__group-title"></h2>
                        <button type="button" className="element__group-button"><img className="element__group-favorite" alt="Избранное" src={like} /></button>
                    </div>
                    <span id="element__likes" className="element__likes"></span>
                </article>
            </template>
            </section>
        </main>
    )
}

export default Main;