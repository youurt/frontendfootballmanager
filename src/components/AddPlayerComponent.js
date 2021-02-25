import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddPlayerComponent = () => {
  const [data, setData] = useState({});
  const history = useHistory();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/player/add', data)
      .then((response) => {
        console.log(response);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <>
        <Container fluid="md" class="mt-5">
          <div className="row justify-content-center">
            <Row className="mt-5">
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add name of player"
                    name="name"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add salary of player"
                    name="salary"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Transfer Value</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add transfer value of player"
                    name="transferValue"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add picture url  of player"
                    name="pictureUrl"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Team</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add team of player"
                    name="team"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add position of player"
                    name="position"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Row>
          </div>
        </Container>
      </>
    </>
  );
};

export default AddPlayerComponent;
