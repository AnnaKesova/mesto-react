import React from "react";


function Main() {
    return (
        <main className="page__content content">
        <section className="profile content__profile">
          <div className="profile__edit-photo">
            <img
              className="profile__avatar"
              src="#"
              alt="Аватар пользователя"
              id="photo"
            />
          </div>

          <div className="profile__info">
            <h1 id="header" className="profile__name">Жак-Ив Кусто</h1>
            <button
              type="button"
              className="button profile__edit-button popup-open"
              title="Редактировать профиль"
            ></button>
            <p id="paragraph" className="profile__job">Исследователь океана</p>
          </div>
          <button
            type="button"
            className="button profile__add-button add-open"
            title="Добавить фото"
          >
          </button>
        </section>
        <section className="content__cards cards">
          <ul className="cards__elements"></ul>
        </section>
      </main>
    );
  }
  
  export default Main;



