import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [cards, setCards] = useState([]);

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

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCardApi(card._id)
            .then(() => {
                setCards((prevState) => prevState.filter((c) => c._id !== card._id));
            })
            .catch((err) => {
                console.log('Ошибка: ', err);
            })
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    function handleUpdateUser({ name, about }) {
        api.editApiProfile(name, about)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log('Ошибка:', err);
      });
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

    useEffect(() => {
        api.getApiUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <Header />
            <Main cards={cards} onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                setCards={setCards} 
                onCardDelete={handleCardDelete} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            <Footer />
            
            <EditProfilePopup onUpdateUser={handleUpdateUser} isEditProfilePopupOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups} />


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
    </CurrentUserContext.Provider>


  );
}

export default App;
