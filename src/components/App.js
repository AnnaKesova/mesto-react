import React from 'react'
import '../index.css';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js'

function App() {
  return (
    
       <body className="root">
    <div className="page">
      <Header />
      <Main/>
      <Footer/>
      
    </div>
    <div id="popup-avatars" className="popup popup-avatar">
      <div className="popup__body">
        <h2 className="popup__heading">Обновить аватар</h2>
        <form className="form" name="myForm" novalidate>
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
          <button
            type="submit"
            className="button popup__save popup-avatar__save"
            title="Запомнить"
            aria-label="Сохранить"
            disabled
          >
            Сохранить
          </button>
        </form>
        <button
          type="button"
          className="button popup__close"
          title="Закрыть"
          aria-label="Закрытие"
        ></button>
      </div>
    </div>
    <div id="popup-form" className="popup popup-form">
      <div className="popup__body">
        <h2 className="popup__heading">Редактировать профиль</h2>
        <form className="form form-profile" name="myProfile" novalidate>
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
          <button
            type="submit"
            className="button popup__save popup-form__save"
            title="Сохранить"
            aria-label="Хранить"
            disabled
          >
            Сохранить
          </button>
        </form>
        <button
          type="button"
          className="button popup__close"
          title="Закрыть"
          aria-label="Закрытие"
        ></button>
      </div>
    </div>
    <div id="popup-confirm" className="popup confirm-popup">
      <div className="popup__body">
        <form className="form form-confirm">
          <h2 className="popup__heading confirm-popup__heading">Вы уверены?</h2>
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
    <div id="popup-card" className="popup popup-cards">
      <div className="popup__body">
        <h2 className="popup__heading">Новое место</h2>
        <form className="form form-card" name="FormCards" novalidate>
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
          <button
            type="submit"
            className="button popup__save popup-cards__create"
            title="Создать"
            aria-label="Сделать"
            disabled
          >
            Создать
          </button>
        </form>
        <button
          type="button"
          className="button popup__close popup-cards__close"
          title="Закрыть"
          aria-label="Закрытие"
        ></button>
      </div>
    </div>
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
