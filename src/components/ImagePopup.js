import React from "react";

// function ImagePopup({ card, onClose }) {
//     return (
//         <div className="popup popup_form_image">
//             <div className="popup-image-container">
//                 <img className="popup-image-container__image-fullscreen" alt="" />
//                 <h2 className="popup-image-container__title-fullscreen"></h2>
//                 <button className="popup-image-container__close-button popup-close" type="button"></button>
//             </div>
//         </div>
//     );
// }

function ImagePopup({ card, onClose }) {
    return (
      <div className={`popup ${card ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button" onClick={onClose}></button>
          <img src={card?.link} alt={card?.name} className="popup__image" />
          <p className="popup__caption">{card?.name}</p>
        </div>
      </div>
    );
  }

export default ImagePopup;