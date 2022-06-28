import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    onAddPlace({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="cards"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        className="form__item form__item_type_city"
        type="text"
        name="name"
        placeholder="Название"
        value={name}
        required
        minLength="2"
        maxLength="30"
        id="cardname"
        onChange={handleChangeName}
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
        value={link}
        required
        id="link"
        onChange={handleChangeLink}
      />
      <span
        className="form__item-error form__item-error_active"
        id="link-error"
      ></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
