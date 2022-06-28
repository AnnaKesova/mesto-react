import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="form"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        className="form__item form__item_type_username"
        type="text"
        name="name"
        placeholder="Имя"
        value={name}
        minLength="2"
        maxLength="40"
        required
        id="name"
        onChange={handleChangeName}
      />
      <span
        className="form__item-error form__item-error_active"
        id="username-error"
      ></span>
      <input
        className="form__item form__job form__item_type_job"
        type="text"
        name="description"
        placeholder="О себе"
        value={description}
        minLength="2"
        maxLength="200"
        required
        id="about"
        onChange={handleChangeDescription}
      />
      <span
        className="form__item-error form__item-error_active"
        id="job-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
