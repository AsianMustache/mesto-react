import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    }


  return (
    <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm name="form_edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <label className="popup__label">
                <input type="text" id="name" name="name" value="Жак-Ив Кусто" placeholder="Введите имя" className="edit-form__text edit-form__text_input_name popup__input" minLength="2" maxLength="40" required />
                <span className="name-error popup__input-error"></span>
            </label>
            <label className="popup__label">
                <input type="text" id="description"  name="description" placeholder="Введите профессию" value="Исследователь океана" className="edit-form__text edit-form__text_input_description popup__input" minLength="2" maxLength="200" required />
                <span className="description-error popup__input-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm name="form_add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <label className="popup__label">
                <input type="text" id="name-place" name="name-place"  placeholder="Название" className="add-form__text add-form__text_input_title popup__input" minLength="2" maxLength="40" required />
                <span className="name-place-error popup__input-error"></span>
            </label>
            <label className="popup__label">
                <input type="url" name="url" id="url" placeholder="Ссылка на картинку" className="add-form__text add-form__text_input_url popup__input" required />
                <span className="url-error popup__input-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm name="form_edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <label className="popup__label">
                <input type="url" name="url" id="url-avatar" placeholder="Ссылка на аватар" className="avatar-edit-form__input-url popup__input" required />
                <span className="url-avatar-error popup__input-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm name="form_delete" title="Удаление">
            <button type="button" className="popup-container__close-button popup-close"></button>
            <h2 className="popup-container__title-delete">Вы уверены?</h2>
            <button type="button" className="popup-container__delete-button popup__button">Да</button>
        </PopupWithForm>

        <ImagePopup />
        {/* <div className="popup popup_form_edit">
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
        </div> */}

    </div>



  );
}

export default App;
