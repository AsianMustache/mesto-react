import React from "react";

function ImagePopup() {
    return (
        <div className="popup popup_form_image">
            <div className="popup-image-container">
                <img className="popup-image-container__image-fullscreen" alt="" />
                <h2 className="popup-image-container__title-fullscreen"></h2>
                <button className="popup-image-container__close-button popup-close" type="button"></button>
            </div>
        </div>
    );
}

export default ImagePopup;