import { useState ,useEffect } from "react";

import "./App.css";

import Card from "./components/Card/Card";
import MyModal from "./components/MyModal/MyModal";

import animal1 from './images/animal1.png'
import animal2 from './images/animal2.png'
import animal3 from './images/animal3.png'
import animal4 from './images/animal4.png'
import animal5 from './images/animal5.png'
import animal6 from './images/animal6.png'

const cardImages = [
  {
    src: animal1,
    matched: false,
  },
  {
    src: animal2,
    matched: false,
  },
  {
    src: animal3,
    matched: false,
  },
  {
    src: animal4,
    matched: false,
  },
  {
    src: animal5,
    matched: false,
  },
  {
    src: animal6,
    matched: false,
  },
];

function App() {
const [modalActive, setModalActive] = useState(true),
      [cards, setCards] = useState([]),
      [turns, setTurns] = useState(0),
      [choiceOne, setChoiceOne] = useState(null),
      [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // duplicate array
      .sort(() => Math.random() - 0.5) // random sort
      .map((card) => ({ ...card, id: Math.random() })); // return new array with id
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setTurn();
      } else {
        setTimeout(() => setTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const setTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };
  return (
    <div className="App">
      <div className="toolbar">
        <div>Попытки: {turns}</div>
        <button
          onClick={() => {
            setTurn();
            shuffleCards();
          }}
        >
          Новая игра
        </button>
      </div>
      <MyModal
        active={modalActive}
        setActive={setModalActive}
        shuffleCards={shuffleCards}
      />
      <div className="cards">
        {modalActive === false
          ? cards.map((item) => (
              <Card
                key={item.id}
                handleChoice={handleChoice}
                card={item}
                flipped={
                  item === choiceOne ||
                  item === choiceTwo ||
                  item === item.matched
                }
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
