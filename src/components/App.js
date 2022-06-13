import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  // состояние для попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  // открытие попапов
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleSelectedCard(card) {
    setSelectedCard(card);
  }
  // закрытие попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleSelectedCard}
        />
        <Footer />
      </div>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          className="form__item form__item_type_avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          defaultValue=""
          required
          id="avatar"
        />
        <span
          className="form__item-error form__item-error_active"
          id="avatar-error"
        ></span>
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        name="form"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          className="form__item form__item_type_username"
          type="text"
          name="username"
          placeholder="Имя"
          defaultValue=""
          minLength="2"
          maxLength="40"
          required
          id="username"
        />
        <span
          className="form__item-error form__item-error_active"
          id="username-error"
        ></span>
        <input
          className="form__item form__job form__item_type_job"
          type="text"
          name="job"
          placeholder="О себе"
          defaultValue=""
          minLength="2"
          maxLength="200"
          required
          id="job"
        />
        <span
          className="form__item-error form__item-error_active"
          id="job-error"
        ></span>
      </PopupWithForm>
      <div id="popup-confirm" className="popup confirm-popup">
        <div className="popup__body">
          <form className="form form-confirm">
            <h2 className="popup__heading confirm-popup__heading">
              Вы уверены?
            </h2>
            <button
              type="submit"
              className="button popup__save confirm-popup__yes"
              title="Согласие"
              aria-label="Согласиться"
            >
              Да
            </button>
          </form>

          <button
            type="button"
            className="button popup__close confirm-popup__close"
            title="Закрыть"
            aria-label="Закрытие"
          ></button>
        </div>
      </div>
      <PopupWithForm
        title="Новое место"
        name="cards"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <input
          className="form__item form__item_type_city"
          type="text"
          name="name"
          placeholder="Название"
          defaultValue=""
          required
          minLength="2"
          maxLength="30"
          id="cardname"
        />
        <span
          className="form__item-error form__item-error_active"
          id="cardname-error"
        ></span>
        <input
          className="form__item form__item_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          defaultValue=""
          required
          id="link"
        />
        <span
          className="form__item-error form__item-error_active"
          id="link-error"
        ></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
