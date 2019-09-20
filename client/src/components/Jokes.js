import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

const jokesWrapper = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '90%',
  justifyContent: 'space-between',
  margin: '7rem auto',
};

const Jokes = () => {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    if (!jokes) {
      axios
        .get('http://localhost:3300/api/jokes', {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        })
        .then(res => {
          setJokes(res.data);
        });
    }
  }, [jokes]);

  return (
    <div style={jokesWrapper}>
      {jokes &&
        jokes.map((joke, index) => {
          return (
            <Card key={joke.id}>
              <Card.Content>
                <Card.Header>Joke #{index}</Card.Header>
                <Card.Description>{joke.joke}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
    </div>
  );
};

export default Jokes;
