import React, { useState } from "react";
import Card from "./Cards";


export default function App() {
  const [cards, setCards] = useState([
    {
      cardId: 1,
      cardTitle: "Card1",
      cardSubTitle: "Card1 subtitle",
      imageUrl: "https://1.bp.blogspot.com/-IHIprxC2Za0/UBg14NttLLI/AAAAAAAAA28/nyBH-GeEX7Y/s1600/white-apple-logo-wallpaper.jpg",
      enabled: true,
    },
    {
      cardId: 2,
      cardTitle: "Card2",
      cardSubTitle: "Card2 subtitle",
      imageUrl: "https://via.placeholder.com/150",
      enabled: true,
    },
    {
      cardId: 3,
      cardTitle: "Card3",
      cardSubTitle: "Card3 subtitle",
      imageUrl: "https://via.placeholder.com/150",
      enabled: true,
    },
    {
      cardId: 4,
      cardTitle: "Card4",
      cardSubTitle: "Card4 subtitle",
      imageUrl: "https://via.placeholder.com/150",
      enabled: true,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState({
    cardTitle: "",
    cardSubTitle: "",
    imageUrl: "",
  });

  const handleAddCardClick = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCardId = cards.length + 1;
    const cardToAdd = { ...newCard, cardId: newCardId, enabled: true };
    setCards([...cards, cardToAdd]);
    setShowForm(false);
    setNewCard({
      cardTitle: "",
      cardSubTitle: "",
      imageUrl: "",
    });
  };

  const onCardClicked = (clickedCard) => {
    alert(`Card clicked: ${clickedCard}`);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button className="btn" onClick={handleAddCardClick}>
        {showForm ? "X" : "Add Card"}
      </button>
      {showForm ? (
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="cardTitle"
              value={newCard.cardTitle}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Sub Title:
            <input
              type="text"
              name="cardSubTitle"
              value={newCard.cardSubTitle}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Image URL:
            <input
              type="img"
              name="imageUrl"
              value={newCard.imageUrl}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      ) : (
        cards.map((card) => (
          <Card
            key={card.cardId}
            title={card.cardTitle}
            cardNumber={card.cardId}
            subtitle={card.cardSubTitle}
            imageUrl={card.imageUrl}
            onCardClicked={() => onCardClicked(card.cardTitle)}
            enabled={card.enabled}
          >
            Card Data
          </Card>
        ))
      )}
    </div>
  );
}
