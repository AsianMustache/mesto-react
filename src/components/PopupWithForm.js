import React from "react";

function PopupWithForm({ isOpen, name, title, children, onClose }) {
    const className = isOpen ? 'popup_opened' : '';
    return (
        <div className={`popup popup_form_${name} ${className}`}>
            <div className="popup-container">
                <button type="button" className="popup-container__close-button popup-close" onClick={onClose}></button>
                <h2 className="popup-container__title">{title}</h2>
                <form name={name} className={`${name}-form popup__form`}>
                    {children}
                    <button type="submit" className={`${name}-form__container-button popup__button`}>Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;