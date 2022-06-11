import React from "react";
import { api } from "../utils/Api.js";

function Main({ onEditProfile, onEditAvatar, onAddPlace }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  // промис для получения данных картинки и пользователя
  Promise.all([/*initialcards,*/ api.getUserInfoFromApi()])
    .then(([/*cardsInit,*/ userInfoApi]) => {
      setUserName(userInfoApi.name);
      setUserDescription(userInfoApi.about);
      setUserAvatar(userInfoApi.avatar);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <main className="page__content content">
      <section className="profile content__profile">
        <div className="profile__edit-photo" onClick={onEditAvatar}>
          <div
            className="profile__avatar"
            id="photo"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
        </div>

        <div className="profile__info">
          <h1 id="header" className="profile__name">
            {userName}
          </h1>
          <button
            type="button"
            className="button profile__edit-button popup-open"
            title="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
          <p id="paragraph" className="profile__job">
            {userDescription}
          </p>
        </div>
        <button
          type="button"
          className="button profile__add-button add-open"
          title="Добавить фото"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="content__cards cards">
        <ul className="cards__elements"></ul>
      </section>
    </main>
  );
}

export default Main;
