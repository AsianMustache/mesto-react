import React from 'react';
import logo from '../images/logo.svg'

function App() {
  return (
    <div className="page">
        <header className="header">
            <a href="/" className="header__logo"><img src={logo} alt="Место - Россия" className="header__logo-image" /></a>
        </header>
        <main className="content">
            <section className="profile">
                <button id="profile-avatar" className="profile__avatar" ></button>
                <div className="profile__info">
                  <h1 id="profile-name" className="profile__info-name"></h1>
                  <p id="profile-description" className="profile__info-description"></p>
                  <button type="button" className="profile__info-edit-button"><img src="<%=require('./images/editButton.svg')%>" className="profile__info-edit-button-image" alt="Редактирование кнопка" /></button>
                </div>
                <button type="button" className="profile__add-button"><img src="<%=require('./images/plus.svg')%>" alt="Добавление" className="profile__add-button-image" /></button>
              </section>
            <section className="elements">
            <template id="template-elements">
                <article className="element">
                    <button type="button" className="element__delete-button"><img className="element__image-delete" src="<%=require('./images/Trash.svg')%>" alt="Кнопка удаления" /></button>
                    <img className="element__image" />
                    <div className="element__group">
                        <h2 className="element__group-title"></h2>
                        <button type="button" className="element__group-button"><img className="element__group-favorite" alt="Избранное" src="<%=require('./images/favorite.svg')%>"/></button>
                    </div>
                    <span id="element__likes" className="element__likes"></span>
                </article>
            </template>
            </section>
        </main>
        <footer className="footer" aria-label="Подвал сайта">
            <p className="footer__copyright">© 2023 Mesto Russia</p>
        </footer>
        <div className="popup popup_form_edit">
            <div className="popup-container">
                <button type="button" className="popup-container__close-button popup-close"></button>
                <h2 className="popup-container__title">Редактировать профиль</h2>
                <form name="edit-form" className="edit-form popup__form" noValidate>
                    <label className="popup__label">
                        <input type="text" id="name" name="name" value="Жак-Ив Кусто" placeholder="Введите имя" className="edit-form__text edit-form__text_input_name popup__input" minLength="2" maxLength="40" required />
                        <span className="name-error popup__input-error"></span>
                    </label>
                    <label className="popup__label">
                        <input type="text" id="description"  name="description" placeholder="Введите профессию" value="Исследователь океана" className="edit-form__text edit-form__text_input_description popup__input" minLength="2" maxLength="200" required />
                        <span className="description-error popup__input-error"></span>
                    </label>
                    <button type="submit" className="edit-form__container-button popup__button">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup popup_form_add">
            <div className="popup-container">
                <button type="button" className="popup-container__add-popup-close-button popup-close"></button>
                <h2 className="popup-container__title">Новое место</h2>
                <form name="add-form" className="add-form popup__form" noValidate>
                    <label className="popup__label">
                        <input type="text" id="name-place" name="name-place"  placeholder="Название" className="add-form__text add-form__text_input_title popup__input" minLength="2" maxLength="40" required />
                        <span className="name-place-error popup__input-error"></span>
                    </label>
                    <label className="popup__label">
                        <input type="url" name="url" id="url" placeholder="Ссылка на картинку" className="add-form__text add-form__text_input_url popup__input" required />
                        <span className="url-error popup__input-error"></span>
                    </label>
                    <button type="submit" className="add-form__container-button popup__button">Создать</button>
                </form>
            </div>
        </div>
        <div className="popup popup_form_image">
            <div className="popup-image-container">
                <img className="popup-image-container__image-fullscreen" alt="" />
                <h2 className="popup-image-container__title-fullscreen"></h2>
                <button className="popup-image-container__close-button popup-close" type="button"></button>
            </div>
        </div>
        <div className="popup popup_form_delete">
            <div className="popup-container">
                <button type="button" className="popup-container__close-button popup-close"></button>
                <h2 className="popup-container__title-delete">Вы уверены?</h2>
                <button type="button" className="popup-container__delete-button popup__button">Да</button>
            </div>
        </div>
        <div className="popup popup_form_edit-avatar">
            <div className="popup-container">
                <button type="button" className="popup-container__add-popup-close-button popup-close"></button>
                <h2 className="popup-container__title-avatar-edit">Обновить аватар</h2>
                <form name="avatar-edit-form" className="avatar-edit-form popup__form" noValidate>
                    <label className="popup__label">
                        <input type="url" name="url" id="url-avatar" placeholder="Ссылка на аватар" className="avatar-edit-form__input-url popup__input" required />
                        <span className="url-avatar-error popup__input-error"></span>
                    </label>
                    <button type="submit" className="avatar-edit-form__button popup__button">Сохранить</button>
                </form>
            </div>
        </div>

    </div>



  );
}

export default App;
