import React, { useEffect, useState } from "react";
import styles from "./GameBoard.module.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { isGameOverSelect, songsSelect } from "../../store/selectors";
import { Song } from "../../store/types";
import { endGame } from "../../store/slices";
import GameOver from "../GameOver/GameOver";
import { useNavigate } from 'react-router-dom';
import Equalizer from "../Equalizer/Equalizer";


const GameBoard: React.FC = () => {
  const dispatch = useAppDispatch();
  const songs = useAppSelector(songsSelect);
  const isGameOver = useAppSelector(isGameOverSelect);
  const [cards, setCards] = useState<Song[]>(songs)
  const [indexOpenImage, setIndexOpenImage] = useState<null | number>(null);
  const navigate = useNavigate();

  const handleClickCard = (index: number) => {
    const newCards = cards.map((card, i) =>
      i === index ? { ...card, status: 'inactive' } : card
    );
    newCards[index].status = 'inactive';
    setCards(newCards);
    setIndexOpenImage(index);
  }

  useEffect(() => {
    if (cards?.length === 0) {
      navigate('/')
    }

    const isActiveCards = cards.find((card) => card.status === 'active');


    if (!isActiveCards && cards?.length > 0) {
      localStorage.removeItem('board');
      dispatch(endGame());
    } else if (cards?.length > 0) {
      localStorage.setItem('board', JSON.stringify(cards));
    }

    return
  }, [cards])

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' || event.key === 'Enter') {
        setIndexOpenImage(null);
      }
    });
  }, []);


  if (isGameOver) {
    return <GameOver />
  }

  return (
    <div className={styles.container}>
      <div className={styles.boardContainer}>
        <div className={styles.board}>
          {cards.map((card, index) => (
            <>
              <div
                key={index}
                className={card.status === 'active' ? styles.card : styles.inactive}
                onClick={() => handleClickCard(index)}
              >
                {index + 1}
              </div>
              <div className={`${styles.imgContainer} ${indexOpenImage === index ? styles.active : ''}`}>
                <img alt={card.title} src={card.image} />
                <div className={styles.numberCardContainer}>
                  <div className={styles.numberCardText}>
                    {index + 1}
                  </div>
                </div>
                <div className={styles.border}>
                  <div className={styles.text}>{card.title.toUpperCase()}</div>
                  <div className={styles.text}>{card.artist.toLocaleUpperCase()}</div>
                </div>
              </div>

            </>

          ))}
        </div>
      </div>

      <div className={styles.logo}>
        <Equalizer />
        <div className={styles.logoText}>МУЗЛОТО</div>
      </div>
    </div>

  );
};

export default GameBoard;