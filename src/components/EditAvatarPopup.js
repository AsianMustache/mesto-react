import React, { useRef } from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isEditAvatarPopupOpen, closeAllPopups, onUpdateAvatar }) {
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
        avatarRef.current.value = '';
    }


    return (
        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Сохранить" onSubmit={handleSubmit}>
                <label className="popup__label">
                    <input type="url" name="url" id="url-avatar" placeholder="Ссылка на аватар" className="avatar-edit-form__input-url popup__input" ref={avatarRef} required />
                    <span className="url-avatar-error popup__input-error"></span>
                </label>
            </PopupWithForm>
    )
}

export default EditAvatarPopup;