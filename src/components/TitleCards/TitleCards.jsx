import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";
/* import cards_data from "../../assets/cards/Cards_data"; */

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  /* Fetch the data, put it into a variable, display the variable & boom!!!! */

  /* Da rivedere js DOM useref e useEffect */
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk5OWI0Mjc3YWQ3YWQyZTJkODJkODIyZjIxZjc1OSIsIm5iZiI6MTc1MzEwMzY2Ny42Miwic3ViIjoiNjg3ZTNkMzM4MWMxMjMyZWIxOGE0ZTRlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LbUmhZTH77KIs3ybXObBP2Cz7NBXLqKND1jakBgR60s",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      /* Prendo i risultati dal mio json e li metto in setApiData */
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("Wheel", handleWheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            /* Prendi l'id dalla card  */
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TitleCards;
