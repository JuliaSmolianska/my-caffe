import Card from "react-bootstrap/Card";
import menuData from "../data/drink.json";

const HomePage1 = () => {
  return (
    <>
      {menuData.menu.map((item) => (
        <Card
          key={item.id}
          border="primary"
          style={{ width: "18rem", marginBottom: "20px" }}
        >
          <Card.Header>{item.item}</Card.Header>
          <Card.Body>
            <Card.Title>{item.item}</Card.Title>
            <Card.Text>Price: ${item.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default HomePage1;
