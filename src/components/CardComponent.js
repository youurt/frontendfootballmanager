import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const CardComponent = ({ player }) => {
  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:8080/player/delete/${e.target.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={player.pictureUrl} />
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>Salary: {player.salary} Mio. €</Card.Text>
          <Card.Text>Team: {player.team}</Card.Text>
          <Card.Text>Position: {player.position}</Card.Text>
          <Card.Text>Market Value: {player.transferValue} Mio €</Card.Text>
          <Card.Text>Player Id: {player.id} </Card.Text>
          <Button id={player.id} onClick={deleteHandler} variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
