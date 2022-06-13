import React from "react";
import { api } from "../utils/Api.js";
import Card from "../components/Card.js";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  // промис для получения данных картинки и пользователя
  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfoFromApi()])
      .then(([initialcards, userInfoApi]) => {
        setUserName(userInfoApi.name);
        setUserDescription(userInfoApi.about);
        setUserAvatar(userInfoApi.avatar);

        setCards(initialcards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <ul className="cards__elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
