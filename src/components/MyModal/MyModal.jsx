import React from "react";
import { useEffect } from "react";
import './MyModal.css';
export default function MyModal({ active, setActive, shuffleCards}) {
  useEffect(() => shuffleCards(),[]);
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
         <span>Игра на память: </span>ваша задача найти пару каждому животному
      </div>
    </div>
  );
}
