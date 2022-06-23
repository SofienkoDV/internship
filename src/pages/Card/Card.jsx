/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from './Card.module.scss';

function Card() {
  // eslint-disable-next-line no-unused-vars
  const [cardList, setCardList] = useState([
    {
      id: 1,
      order: 3,
      text: 'акція',
    },
    {
      id: 2,
      order: 2,
      text: 'оголошення',
    },
    {
      id: 3,
      order: 1,
      text: 'подія',
    },
    {
      id: 4,
      order: 4,
      text: 'новина',
    },
  ]);

  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandler(e, card) {
    setCurrentCard(card);
  }
  function dragEndHandler(e, card) {
    e.target.style.background = '#fff';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.backgroundColor = 'lightblue';
  }
  function dropHandler(e, card) {
    e.preventDefault();
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
    e.target.style.background = '#fff';
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  };

  return (
    <div className={styles.appCard}>
      {cardList.sort(sortCards).map((card) => (
        // eslint-disable-next-line react/jsx-curly-brace-presence
        <div
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
          draggable
          key={card.id}
          // eslint-disable-next-line react/jsx-curly-brace-presence
          className={styles.card}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
}

export default Card;
