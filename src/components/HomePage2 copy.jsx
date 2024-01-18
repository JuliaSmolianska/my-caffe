import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import menuData from '../data/drink.json';

const HomePage2 = () => {
  const [cards, setCards] = useState(menuData.menu);
  const [editingCardId, setEditingCardId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const handleTitleChange = (id) => {
    setEditingCardId(id);
  };

  const handleTitleSave = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, item: newTitle } : card
      )
    );
    setEditingCardId(null);
    setNewTitle('');
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
          style={{ width: '18rem', marginBottom: '20px' }}
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

export default HomePage2;
