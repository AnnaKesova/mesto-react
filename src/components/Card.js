import React from 'react';


function Card({card, onCardClick}) {

    const handleClick = () => {
        onCardClick(card);
    }


  return (
    <li className="photo">
    <img src={card.link} className="photo__image" alt={card.name} onClick={handleClick} />
    <div className="photo__title">
      <h2 className="photo__text">{card.name}</h2>
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
  );
}

export default Card;