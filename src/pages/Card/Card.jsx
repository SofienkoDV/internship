import { useState, useEffect } from 'react';
import styles from './Card.module.scss';

function Card() {
  const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
    function upHandler({ key }) {
      if (key === targetKey) {
        setTimeout(() => {
          setKeyPressed(false);
        }, 5000);
      }
    }

    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, [downHandler, upHandler]);
    return keyPressed;
  };

  const isCardOne = useKeyPress('1');
  const isCardTwo = useKeyPress('2');
  const isCardThree = useKeyPress('3');
  const isCardFour = useKeyPress('4');
  const [cardList, setCardList] = useState([
    {
      id: 1,
      order: 3,
      text: 'Акція',
    },
    {
      id: 2,
      order: 2,
      text: 'Оголошення',
    },
    {
      id: 3,
      order: 1,
      text: 'Подія',
    },
    {
      id: 4,
      order: 4,
      text: 'Новина',
    },
  ]);

  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandler(e, card) {
    setCurrentCard(card);
  }
  function dragEndHandler(e) {
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
    <div className="text-center p-5">
      <h1>Drag and drop</h1>
      <div className={styles.appCardCenter}>
        {cardList.sort(sortCards).map((card) => (
          <div
            onDragStart={(e) => dragStartHandler(e, card)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, card)}
            draggable
            key={card.id}
            className={styles.card}
          >
            {card.text}
          </div>
        ))}
      </div>
      <h1>Hotkey</h1>
      <div className={styles.appCardCenter}>
        {isCardOne && <div className={styles.hotkeyCard}>Акула</div>}
        {isCardTwo && <div className={styles.hotkeyCard}>Лисиця</div>}
        {isCardThree && <div className={styles.hotkeyCard}>Кенгуру</div>}
        {isCardFour && <div className={styles.hotkeyCard}>Гепард</div>}
      </div>
    </div>
  );
}

export default Card;
