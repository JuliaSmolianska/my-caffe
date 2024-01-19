import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const HomePage1 = () => {
  const [cards, setCards] = useState([]);
  const [editingCardId, setEditingCardId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fancy-cupcake-24691f.netlify.app/data/dishes.json"
        );
        const data = await response.json();
        setCards(data.menu);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  const handleTitleChange = (id) => {
    setEditingCardId(id);
  };

  const handleTitleSave = async (id) => {
    try {
      // Use Axios to make a PUT request to your server endpoint
      // Note: This might need adjustments based on your server logic
      const response = await fetch(
        "https://fancy-cupcake-24691f.netlify.app/data/dishes.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            newTitle,
          }),
        }
      );

      // Handle the response or update the state as needed
      console.log(response);

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, item: newTitle } : card
        )
      );
      setEditingCardId(null);
      setNewTitle("");
    } catch (error) {
      console.error("Error updating JSON file:", error);
    }
  };

  const handleCardDelete = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <>
      {cards.map((item) => (
        <Card
          key={item.id}
          border="primary"
          style={{ width: "18rem", marginBottom: "20px" }}
        >
          <Card.Header>
            {editingCardId === item.id ? (
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            ) : (
              item.item
            )}
          </Card.Header>
          <Card.Body>
            <Card.Title>{item.item}</Card.Title>
            <Card.Text>Price: ${item.price}</Card.Text>
            {editingCardId === item.id ? (
              <>
                <button onClick={() => handleTitleSave(item.id)}>
                  Save Title
                </button>
              </>
            ) : (
              <button onClick={() => handleTitleChange(item.id)}>
                Change Title
              </button>
            )}
            <button onClick={() => handleCardDelete(item.id)}>
              Delete Card
            </button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default HomePage1;
