import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
//import {api} from "../utils/Api.js"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <body className="root">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__item form__item_type_avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          value=""
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
      >
        <input
          className="form__item form__item_type_username"
          type="text"
          name="username"
          placeholder="Имя"
          value=""
          minlength="2"
          maxlength="40"
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
          value=""
          minlength="2"
          maxlength="200"
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
      >
        <input
          className="form__item form__item_type_city"
          type="text"
          name="name"
          placeholder="Название"
          value=""
          required
          minlength="2"
          maxlength="30"
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
          value=""
          required
          id="link"
        />
        <span
          className="form__item-error form__item-error_active"
          id="link-error"
        ></span>
      </PopupWithForm>
      <div id="popup-image" className="popup popup-image">
        <div className="popup__content">
          <img className="popup__photo" src="#" alt="" />
          <p className="popup__text"></p>
          <button
            type="button"
            className="button popup__close popup-image__close"
            title="Закрытие"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>
      <template id="template-photo" className="card-template">
        <li className="photo">
          <img src="#" className="photo__image" alt="" />
          <div className="photo__title">
            <h2 className="photo__text"></h2>
            <div className="photo__group-like">
              <button
                type="button"
                className="button photo__vector"
                title="Нравится"
                aria-label="Любимые картинки"
              ></button>
              <span className="photo__numlike">0</span>
            </div>
          </div>
          <button
            type="button"
            className="button photo__bin"
            title="Удаление"
            aria-label="Урна"
          ></button>
        </li>
      </template>
    </body>
  );
}

export default App;
