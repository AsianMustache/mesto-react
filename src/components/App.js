import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null)

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    
    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    useEffect(() => {
        function handleEscClose(event) {
            if (event.key === 'Escape') {
                closeAllPopups();
            }
        }

        function handleOverlayClose(event) {
            if (event.target.classList.contains('popup')) {
                closeAllPopups();
            }
        }

        window.addEventListener('keydown', handleEscClose);
        window.addEventListener('mousedown', handleOverlayClose);

        return () => {
            window.removeEventListener('keydown', handleEscClose);
            window.removeEventListener('mousedown', handleOverlayClose);
            document.body.classList.add('body');
        };
    }, []);

  return (
    <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
            <label className="popup__label">
                <input type="text" id="name" name="name" value="Жак-Ив Кусто" readOnly placeholder="Введите имя" className="edit-form__text edit-form__text_input_name popup__input" minLength="2" maxLength="40" required />
                <span className="name-error popup__input-error"></span>
            </label>
            <label className="popup__label">
                <input type="text" id="description"  name="description" placeholder="Введите профессию" value="Исследователь океана" readOnly className="edit-form__text edit-form__text_input_description popup__input" minLength="2" maxLength="200" required />
                <span className="description-error popup__input-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Добавить">
            <label className="popup__label">
                <input type="text" id="name-place" name="name-place"  placeholder="Название" className="add-form__text add-form__text_input_title popup__input" minLength="2" maxLength="40" required />
                <span className="name-place-error popup__input-error"></span>
            </label>
            <label className="popup__label">
                <input type="url" name="url" id="url" placeholder="Ссылка на картинку" className="add-form__text add-form__text_input_url popup__input" required />
                <span className="url-error popup__input-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
            <label className="popup__label">
                <input type="url" name="url" id="url-avatar" placeholder="Ссылка на аватар" className="avatar-edit-form__input-url popup__input" required />
                <span className="url-avatar-error popup__input-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Удаление">
            <button type="button" className="popup-container__close-button popup-close"></button>
            <h2 className="popup-container__title-delete">Вы уверены?</h2>
            <button type="button" className="popup-container__delete-button popup__button">Да</button>
        </PopupWithForm>

        <ImagePopup />

    </div>



  );
}

export default App;
