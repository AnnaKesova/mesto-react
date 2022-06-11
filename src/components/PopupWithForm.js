import React from 'react';

function PopupWithForm({title, name, isOpen, onClose, children}) {
  return (
    <div  className= {`popup popup-${name} ${isOpen && `popup_active`}`}>
    <div className="popup__body">
      <h2 className="popup__heading">{title}</h2>
      <form className={`form profile-${name}`} name="myProfile">
      {children}
        <button
          type="submit"
          className="button popup__save"
          title="Сохранить"
        >   
        Сохранить  
        </button>
      </form>
      <button
        type="button"
        className="button popup__close"
        title="Закрыть"
        aria-label="Закрытие"
        onClick={onClose}
      ></button>
    </div>
  </div>
  );
}

export default PopupWithForm;