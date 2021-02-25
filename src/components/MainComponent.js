import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardComponent from './CardComponent';

const MainComponent = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const url = 'http://localhost:8080/player/all';

  useEffect(() => {
    getAllPlayers();
  }, []);

  const getAllPlayers = () => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setAllPlayers(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Container fluid="md" class="mt-5">
        <div className="row justify-content-center">
          <Row className="mt-5">
            {allPlayers.map((player, idx) => {
              return <CardComponent player={player} />;
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default MainComponent;
